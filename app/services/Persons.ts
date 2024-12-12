export interface PersonRequest {
    fullName: string;
    dateBirthString: string;
}

export const getAllPersons = async () => {
    const responce = await fetch("http://localhost:5041/api/Persons");

    return responce.json();
}

export const createPerson = async (personRequest: PersonRequest) => {
    await fetch ("http://localhost:5041/api/Persons", {
        method: "POST",
        headers: {"content-type": "application/json"},
        body: JSON.stringify(personRequest),
    })
} 

export const  updatePerson = async (id: number, personRequest: PersonRequest) => {
    await fetch (`http://localhost:5041/api/Persons/${id}`, {
        method: "PUT",
        headers: {"content-type": "application/json"},
        body: JSON.stringify(personRequest),
    })
}