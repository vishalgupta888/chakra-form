import React from 'react'
import { useFormik } from "formik";
import {Box, Button,Flex, Radio, FormControl, FormLabel, Input, Text, VStack, RadioGroup} from "@chakra-ui/react";
import { RegisterSchema } from '../schemas/Validation';


const initialValues={
  name: "",
  gender:'',
  email: "",
  password: "",
  confirm_password: "" 
}

export default function Form() {
  const {values, errors, handleChange,handleBlur, touched, handleSubmit} = useFormik({
    initialValues: initialValues,
    validationSchema: RegisterSchema,
    onSubmit: () => {
      alert(JSON.stringify(values, null, 2));
    }
  });
  return (
    <Flex bg="gray.100" align="center" justify="center" h="100vh">
      <Box bg="white" p={6} w='20vw' rounded="md">
        <form onSubmit={handleSubmit}>
          <VStack spacing={4} align="flex-start">
          <FormControl>
              <FormLabel htmlFor="name">Name</FormLabel>
              <Input
                id="name"
                name="name"
                type="name"
                variant="filled"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.name}
              />
             { errors.name && touched.name ? <Text color='red.500' fontWeight='bold' mt={2} fontFamily='sans-serif' fontSize={11}>{errors.name}</Text> : null}
            </FormControl>
            
              <FormLabel>Gender</FormLabel>
              <RadioGroup name='gender'>
              <Radio color='yellow' value='1'>Male</Radio>
              <Radio color='yellow' value='2' pl={5}>Female</Radio>
              </RadioGroup>
            <FormControl>
              <FormLabel htmlFor="email">Email Address</FormLabel>
              <Input
                id="email"
                name="email"
                type="email"
                variant="filled"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
              />
         { errors.email && touched.email ? <Text color='red.500' fontWeight='bold' mt={2} fontFamily='sans-serif' fontSize={11}>{errors.email}</Text> : null}

            </FormControl>
            <FormControl>
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input
                id="password"
                name="password"
                type="password"
                variant="filled"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.password}
              />
              { errors.password && touched.password ? <Text color='red.500' fontWeight='bold' mt={2} fontFamily='sans-serif' fontSize={11}>{errors.password}</Text> : null}

            </FormControl>
            <FormControl>
              <FormLabel htmlFor="password"> Confirm Password</FormLabel>
              <Input
                id="password"
                name="confirm_password"
                type="password"
                variant="filled"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.confirm_password}
              />
              { errors.confirm_password && touched.confirm_password ? <Text color='red.500' fontWeight='bold' mt={2} fontFamily='sans-serif' fontSize={11}>{errors.confirm_password}</Text> : null}

            </FormControl>
          
            <Button type="submit" colorScheme="yellow" width="full">
               Register
            </Button>
          </VStack>
        </form>
      </Box>
    </Flex>
  );
}