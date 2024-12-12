import Card from "antd/es/card/Card"
import Button from "antd/es/button/button"

interface Props {
    persons: Person[]
}

export const Persons = ({persons}:Props) => {
    return (
        <div className="cards">
            {persons.map((person: Person) => (
                <Card key={person.id} title="сотрудник">
                    <p>{person.fullName}</p>
                    <p>{person.bithDateToString}</p>
                    <div>
                        <Button>Изменить</Button>
                    </div>
                </Card>
            ))}
        </div>
    )
}