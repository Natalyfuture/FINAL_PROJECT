export const TOKEN_KEY = 'token';

class ApiError extends Error {
    constructor({message, data, status}) {
        super(message);
        this.status = status;
        this.data = data; 
    }
}

class API {
    constructor() {
        this.baseURL = 'https://byte-tasks.herokuapp.com/api';
        this.headers = {
            Authorization: null,
            'Content-Type': 'application/json',
        };
    }

    async handleErrors(response) {
        const {ok, status, statusText} = response;
        if(!ok){
            /* throw new Error(`Response on ${url} failed with status ${status}`) */
            throw new ApiError({
                message: "Error!",
                data: await response.json(),
                status: status,
            })
        }
    }

    async register(data) {
        const response = await fetch(`${this.baseURL}/auth/register`, {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify(data),
        });

        await this.handleErrors(response);

        const registeredUser = await response.json();
    
        return registeredUser;
    }

    async login(data) {
        const response = await fetch(`${this.baseURL}/auth/login/`, {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify(data),
        })

        await this.handleErrors(response);

        const {token} = await response.json();
    
        this.headers.Authorization = `Bearer ${token}`;
        localStorage.setItem(TOKEN_KEY, token);
    
    }
    
    async getSelf() {
        const response = await fetch(`${this.baseURL}/auth/user/self`, {
            method: 'GET',
            headers: this.headers,
        })
        await this.handleErrors(response)

        const user = await response.json()
        return user;
    }

    isLoggedIn() {
        return Boolean(localStorage.getItem(TOKEN_KEY))
    }

    autoLogin() {
        const localToken = localStorage.getItem(TOKEN_KEY);
        this.headers.Authorization = `Bearer ${localToken}`;

        return this.getSelf()
    }

    async createTask(data) {
        const res = await fetch(`${this.baseURL}/task`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: this.headers,
        });
        await this.handleErrors(res);

        return res.json();
    }

    async getAllTasks() {
        const response = await fetch(`${this.baseURL}/task`, {
          method: "GET",
          headers: this.headers,
        });
    
       await this.handleErrors(response);
        
        return await response.json();
      }

    async editTask(id, data) {
        const res = await fetch(`${this.baseURL}/task/${id}`, {
            method: 'PATCH',
            body: JSON.stringify(data),
            headers: this.headers,
        });
        await this.handleErrors(res);

        return res.json();
    }

    async deleteTask(id, data) {
        const res = await fetch(`${this.baseURL}/task/${id}`, {
            method: 'DELETE',
            headers: this.headers,
        });
        await this.handleErrors(res);

        return res;
    }

    logout() {
        localStorage.removeItem(TOKEN_KEY);
    }
}




export const api = new API();



