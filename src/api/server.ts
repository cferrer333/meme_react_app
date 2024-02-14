const token = '1be5c6485b3d8886436ca0eba6518a638249806474f0988b'

export const server_calls = {
    get: async () => { 
        const response = await fetch(`https://meme-generator-0ln4.onrender.com/api/memes`,
        {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            }

        });

        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }

        return await response.json()
    },

    create: async (data: any = {}) => {
        const response = await fetch(`https://meme-generator-0ln4.onrender.com/api/memes`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)

        })

        if (!response.ok) {
            throw new Error('Failed to create new data on the server')
        }

        return await response.json()
    },

    update: async (id:string, data: any = {}) => {
        const response = await fetch(`https://meme-generator-0ln4.onrender.com/api/memes/${id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'x-access-token': `Bearer ${token}`
                },
                body: JSON.stringify(data)
    
            })
    
            if (!response.ok) {
                throw new Error('Failed to update data on the server')
            }
    
            return await response.json()
        },

    delete: async (id:string) => {
        const response = await fetch(`https://meme-generator-0ln4.onrender.com/api/memes/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            },

        })

        if (!response.ok) {
            throw new Error('Failed to delete data from the server')
        }

        return;
    },

}
    