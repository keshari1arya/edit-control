
import React from "react";
// Chakra imports
import {
    Box,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    InputGroup,
    Text,
    Textarea,
    useColorModeValue,
    Button
} from "@chakra-ui/react";
// Custom components
// Assets
import Card from "components/card/Card";
import { useForm } from "react-hook-form"
import { createTask } from "service/taskService";

export default function EditTask() {
    const textColor = useColorModeValue("navy.700", "white");
    const textColorSecondary = "gray.400";
    const brandStars = useColorModeValue("brand.500", "brand.400");

    const [show, setShow] = React.useState(false);
    const handleClick = () => setShow(!show);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        await createTask(data);
    }
    return (
        // <DefaultAuth illustrationBackground={illustration} image={illustration}>
        <Card>
            {/* <CardBody> */}
            <Flex
                maxW={{ base: "100%", md: "max-content" }}
                w='100%'
                mx={{ base: "auto", lg: "0px" }}
                me='auto'
                h='100%'
                alignItems='start'
                justifyContent='center'
                mb={{ base: "30px", md: "60px" }}
                px={{ base: "25px", md: "0px" }}
                mt={{ base: "40px", md: "14vh" }}
                flexDirection='column'>
                <Box me='auto'>
                    <Heading color={textColor} fontSize='36px' mb='10px'>
                        Create A Task
                    </Heading>
                    <Text
                        mb='36px'
                        ms='4px'
                        color={textColorSecondary}
                        fontWeight='400'
                        fontSize='md'>
                        Once Task Created you will be able to upload media
                    </Text>
                </Box>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Flex
                        zIndex='2'
                        direction='column'
                        w={{ base: "100%", md: "420px" }}
                        maxW='100%'
                        background='transparent'
                        borderRadius='15px'
                        mx={{ base: "auto", lg: "unset" }}
                        me='auto'
                        mb={{ base: "20px", md: "auto" }}>

                        {/* <Flex align='center' mb='25px'>
                            <HSeparator />
                            <Text color='gray.400' mx='14px'>
                                or
                            </Text>
                            <HSeparator />
                        </Flex> */}
                        <FormControl>
                            <FormLabel
                                display='flex'
                                ms='4px'
                                fontSize='sm'
                                fontWeight='500'
                                color={textColor}
                                mb='8px'>
                                Name<Text color={brandStars}>*</Text>
                            </FormLabel>
                            <Input
                                isRequired={true}
                                // variant='auth'
                                fontSize='sm'
                                ms={{ base: "0px", md: "0px" }}
                                type='text'
                                placeholder='Enter Task Name'
                                mb='24px'
                                fontWeight='500'
                                size='lg'
                                {...register("name")}
                            />
                            <FormLabel
                                ms='4px'
                                fontSize='sm'
                                fontWeight='500'
                                color={textColor}
                                display='flex'>
                                TAT<Text color={brandStars}>*</Text>
                            </FormLabel>
                            <Input
                                isRequired={true}
                                fontSize='sm'
                                placeholder='Min. 8 characters'
                                mb='24px'
                                size='lg'
                                // type={show ? "text" : "password"}
                                type="date"
                                {...register("turnAroundTime")}
                            // variant='auth'
                            />
                            <FormLabel
                                ms='4px'
                                fontSize='sm'
                                fontWeight='500'
                                color={textColor}
                                display='flex'>
                                TAT<Text color={brandStars}>*</Text>
                            </FormLabel>
                            <Input
                                isRequired={true}
                                fontSize='sm'
                                placeholder='Min. 8 characters'
                                mb='24px'
                                size='lg'
                                // type={show ? "text" : "password"}
                                type="date"
                                {...register("goLiveDate")}
                            // variant='auth'
                            />
                            <FormLabel
                                ms='4px'
                                fontSize='sm'
                                fontWeight='500'
                                color={textColor}
                                display='flex'>
                                Video Title<Text color={brandStars}>*</Text>
                            </FormLabel>
                            <Input
                                isRequired={true}
                                fontSize='sm'
                                placeholder='Min. 8 characters'
                                mb='24px'
                                size='lg'
                                // type={show ? "text" : "password"}
                                type="text"
                                {...register("videoTitle")}
                            // variant='auth'
                            />

                            <FormLabel
                                display='flex'
                                ms='4px'
                                fontSize='sm'
                                fontWeight='500'
                                color={textColor}
                                mb='8px'>
                                Video Description
                                <Text color={brandStars}>*</Text>
                            </FormLabel>
                            <Textarea
                                // isRequired={true}
                                // variant='auth'
                                fontSize='sm'
                                // ms={{ base: "0px", md: "0px" }}
                                // placeholder='mail@simmmple.com'
                                mb='24px'
                                fontWeight='500'
                                size='lg'
                                {...register("videoDescription")}
                            />
                            <FormLabel
                                ms='4px'
                                fontSize='sm'
                                fontWeight='500'
                                color={textColor}
                                display='flex'>
                                Tags<Text color={brandStars}>*</Text>
                            </FormLabel>
                            <Input
                                isRequired={true}
                                fontSize='sm'
                                placeholder='Min. 8 characters'
                                mb='24px'
                                size='lg'
                                // type={show ? "text" : "password"}
                                type="text"
                                {...register("videoTags")}
                            // variant='auth'
                            />
                            <InputGroup size='md'>
                                <Button
                                    type="submit"
                                    fontSize='sm'
                                    variant='brand'
                                    fontWeight='500'
                                    w='20%'
                                    h='50'
                                    mb='24px'>
                                    Submit
                                </Button>
                            </InputGroup>
                        </FormControl>
                    </Flex>
                </form>
            </Flex>
            {/* </CardBody> */}
        </Card>
        // </DefaultAuth>
    );
}