

export enum METHOD {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    DELETE = "DELETE"
};

export enum RESOURCE {
    TEST = "test"
}

export type Configuration = {
    method: METHOD;
    body?: any;
}



export async function api(method: METHOD, resource: RESOURCE, body: any) {
    const url = `http://localhost:8080/api/${resource}`

    const httpConfiguration: Configuration = {
        method: method
    }

    if((method === METHOD.PUT || method === METHOD.POST) && !!body) {
        httpConfiguration.body = body;
    }

    try {
      const response = await fetch(url, httpConfiguration);

      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const json = await response.json();
      console.log(json);

    } catch (error: any) {
      console.error(error.message);
    }
  }