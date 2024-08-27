import "./Authorization.scss";
import { useParams } from "react-router-dom";
import Accounts from "@/components/Authorization/Accounts/Accounts.tsx";
import { Form } from "@/components/Authorization/Form/Form.tsx";

export default function Authorization() {
  const { select } = useParams();

  return (
    <>
      {select === "login" && <Form />}
      {select === "selectAccount" && <Accounts />}
    </>
  );
}
