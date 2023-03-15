import { Input, Text } from "@mantine/core";

const Inputt = () => {
  return (
    <div className="p-8">
      <Text>This is the Title</Text>
      <Input.Wrapper id="input-demo">
        <Input id="input-demo" placeholder="Enter Title" />
      </Input.Wrapper>
    </div>
  );
};

export default Inputt;
