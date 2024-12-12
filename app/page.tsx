import {  Table } from "antd";
import Button from "antd/es/button/button"

export default function Home() {
  return (
    <main>
      <section>
        <h3>Мои заявки</h3>
        <TicketList />
      </section>
      <section>
        <h3>Заявки на согласование</h3>
      </section>
    </main>
  );
}

function TicketList(){
  return(
    <Button type="primary" />
    <Table>

    </Table>
  )
}
