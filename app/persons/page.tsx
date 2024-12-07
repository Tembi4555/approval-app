"use client"

import Button from "antd/es/button/button"
import { Persons } from "../components/Persons"
import { useEffect, useState } from "react"
import { getAllPersons } from "../services/Persons"
import Title from "antd/es/skeleton/Title"

export default function PersonsPage() {
    const [persons, setPersons] = useState<Person[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getPersons = async () => {
            const persons = await getAllPersons();
            setLoading(false);
            setPersons(persons);
        };

        getPersons();
    }, [])
    return (
        <div>
            <Button>Добавить сотрудника</Button>
                

            <Persons persons={persons}/>

            (loading ? <Title>Загрузка ...</Title> : <Persons persons = {persons}/>)
        </div>
    )
}