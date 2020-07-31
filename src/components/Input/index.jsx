import React from "react";
import { Container, Input } from "./styles";

export default function({ onClickButton, ...props }) {
  return (
    <Container>
      <Input placeholder="Digite um usuário do GitHub" {...props} />
    </Container>
  );
}
