import { useEffect, useState } from "react";
import { getTaskById } from "service/taskService";
import { Avatar, Box, Flex, Text, useColorModeValue, Grid } from "@chakra-ui/react";
import Card from "components/card/Card.js";
import banner from "assets/img/auth/banner.png";
import avatar from "assets/img/avatars/avatar4.png";
import { useDropzone } from "react-dropzone";

export function TaskDetail({ taskId }) {
    const [task, setTask] = useState({});
    useEffect(async () => {
        const response = await getTaskById(2);
        setTask(response.data)
        console.log(response.data);
    }, []);

    const name = "abc", job = "vc", posts = 20, followers = 23, following = 56;
    // Chakra Color Mode
    const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
    const textColorSecondary = "gray.400";
    const borderColor = useColorModeValue(
        "white !important",
        "#111C44 !important"
    );
    return (<div>
        <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
            <Card mb={{ base: "0px", lg: "20px" }} align='center'>
                <Box
                    bg={`url(${banner})`}
                    bgSize='cover'
                    borderRadius='16px'
                    h='131px'
                    w='100%'
                />
                {/* <Avatar
                    mx='auto'
                    src={avatar}
                    h='87px'
                    w='87px'
                    mt='-43px'
                    border='4px solid'
                    borderColor={borderColor}
                /> */}
                <Text color={textColorPrimary} fontWeight='bold' fontSize='xl' mt='10px'>
                    {task.name}
                </Text>
                <Text color={textColorSecondary} fontSize='sm'>
                    {task.videoTitle}
                </Text>
                <Text color={textColorSecondary} fontSize='sm'>
                    {task.videoDescription}
                </Text>
                <Flex w='max-content' mx='auto' mt='26px'>
                    {/* <Flex mx='auto' me='60px' align='center' direction='column'>
                        <Text color={textColorPrimary} fontSize='2xl' fontWeight='700'>
                            {posts}
                        </Text>
                        <Text color={textColorSecondary} fontSize='sm' fontWeight='400'>
                            Posts
                        </Text>
                    </Flex>
                    <Flex mx='auto' me='60px' align='center' direction='column'>
                        <Text color={textColorPrimary} fontSize='2xl' fontWeight='700'>
                            {followers}
                        </Text>
                        <Text color={textColorSecondary} fontSize='sm' fontWeight='400'>
                            Followers
                        </Text>
                    </Flex> */}
                    <Flex mx='auto' align='center' direction='column'>
                        <Text color={textColorPrimary} fontSize='2xl' fontWeight='700'>
                            {following}
                        </Text>
                        <Text color={textColorSecondary} fontSize='sm' fontWeight='400'>
                            Following
                        </Text>
                    </Flex>
                </Flex>
            </Card>

        </Box>
    </div>)
}