import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Text,
  Icon,
  Input,
  FormControl,
  FormLabel,
  Box,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { MdModeEdit } from "react-icons/md";
const initilalData = {
  id: "",
  name: "",
  price: {
    mrp: "",
    discount: "",
    sp: "",
  },
  brand_name: "",
  sizes: [],
  customer_rating: "",
  product_details: [],
  images: [],
  quantity: "",
};
function BackdropExample({
  brand,
  title,
  desc,
  mrpPrice,
  SpecialPrice,
  productRating,
  productQuantity,
  productImages,
  productSizes,
  productId,
  productDiscount
}) {
  const [data, setData] = useState(initilalData);

  const {
    name,
    price,
    brand_name,
    customer_rating,
    product_details,
    quantity,
  } = data;

  console.log(data);
  const OverlayOne = () => (
    <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px) " />
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayOne />);
  useEffect(() => {
    setData({
      ...data,
      brand_name: brand,
      name: title,
      product_details: [desc],
      quantity: productQuantity,
      customer_rating: productRating,
      sizes: productSizes,
      images: productImages,
      id: productId,
      price: {
        mrp: mrpPrice,
        discount: productDiscount,
        sp: SpecialPrice,
      }
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    onClose();
  };

  return (
    <>
      {/* <Button
        
      > */}
      <Icon
        as={MdModeEdit}
        onClick={() => {
          setOverlay(<OverlayOne />);
          onOpen();
        }}
      />
      {/* </Button> */}

      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent>
          <ModalHeader>Edit Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Brand</FormLabel>
              <Input
                value={brand_name}
                name="brand_name"
                onChange={(e) => handleChange(e)}
              />
              <FormLabel>Title</FormLabel>
              <Input
                value={name}
                name="name"
                onChange={(e) => handleChange(e)}
              />
              <FormLabel>Description</FormLabel>
              <Input
                value={product_details}
                name="product_details"
                onChange={(e) => handleChange(e)}
              />
              <FormLabel>Mrp</FormLabel>
              <Input
                name="price.mrp"
                value={price.mrp}
                onChange={(e) => handleChange(e)}
              />
              <FormLabel>Special Price</FormLabel>
              <Input
                name="price.sp"
                value={price.sp}
                onChange={(e) => handleChange(e)}
              />
              <Box display={"flex"} gap={"5px"} mt={"10px"}>
                <FormLabel>Rating</FormLabel>

                <Input
                  name="customer_rating"
                  value={customer_rating}
                  type={"number"}
                  onChange={(e) => handleChange(e)}
                />
                <FormLabel>Quantity</FormLabel>
                <Input
                  name="quantity"
                  value={quantity}
                  type={"number"}
                  onChange={(e) => handleChange(e)}
                />
              </Box>
              <Box mt="12px" display={"flex"} justifyContent={"center"}>
                <Button onClick={(e) => handleSubmit(e)} colorScheme={"green"}>
                  Submit Changes
                </Button>
              </Box>
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
export default BackdropExample;
