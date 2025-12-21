let car: Object = {
  brand: "BMW",
  color: "White",
};

let newCar: {
  brand: string;
  color: string;
} = {
  brand: "BMW",
  color: "White",
};

console.log(newCar.color);

// Type alias of Object

type Post = {
  title: string;
  content: string;
  date: Date;
  category: string;
};

let post: Post = {
  title: "This is a vlog post",
  content: "Content of the post",
  date: new Date(),
  category: "Vlog",
};

// Nested Objects 

type Address ={
    email: string;
    phone: number;
}

type Person = {
    name: string;
    age: number;
    date: Date;
    address: Address;    
}

let person: Person ={
    name: 'Johnny',
    age: 23,
    date: new Date(),
    address: {
        email: 'john_doe@gmail.com',
        phone: +123547890
    }
}

// Discriminitive 

type NetworkLoadingState = {
    state: 'loading'
}

type NetworkFailedState = {
    state: 'failed';
    code: number;
}

type NetworkSuccessState = {
    state: 'Success';
    response: {
        title: string;
        duration: number;
        summary: string;
    }

}


type NetworkState = NetworkFailedState | NetworkLoadingState | NetworkSuccessState;

function logger(state: NetworkState) {
    // state
    switch(state.state){
        case "loading":
            return "Loading ..."
        case "failed":
            return `Error ${state.code}`
        case "Success":
            return `Error ${state.response.title}`
    }

}

