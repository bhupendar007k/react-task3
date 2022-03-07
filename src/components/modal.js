import { useForm } from "react-hook-form";
import Modal from "react-modal";
import { Form, Label, Button } from "../style/modal";

const Modals = (props) => {
  const { register, handleSubmit } = useForm();
  // form data having to value in which we can update a data with the help of the function handlesubmit
  const onSubmit = (data) => {
    console.log(data);
    props.back(data);
  };
  return (
    <Modal isOpen={props?.show} ariaHideApp={false}>
      <button onClick={props?.close}>close</button>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Label>Id</Label>
        <input defaultValue={props?.datas.id} {...register("id")} />
        <Label>Title</Label>
        <input defaultValue={props?.datas.title} {...register("title")} />
        <Label>Category</Label>
        <input defaultValue={props?.datas.category} {...register("category")} />
        <Label>Description</Label>
        <input
          defaultValue={props?.datas.description}
          {...register("description")}
        />
        <Label>Price</Label>
        <input defaultValue={props?.datas.price} {...register("price")} />
        <Label>Image</Label>
        <input defaultValue={props?.datas.image} {...register("image")} />
        <Button type="submit">submit</Button>
      </Form>
    </Modal>
  );
};
export default Modals;
