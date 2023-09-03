import ComplexTable from "views/admin/dataTables/components/ComplexTable";
import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { fetchTasks } from "service/taskService";

export function ListTask() {
    const [tasks, setTasks] = useState([]);
    const columnsDataComplex = [
        {
            Header: "NAME",
            accessor: "name",
        },
        {
            Header: "STATUS",
            accessor: "status",
        },
        {
            Header: "TAT",
            accessor: "turnAroundTime",
        },
        {
            Header: "GO LIVE",
            accessor: "goLiveDate",
        },
        {
            Header: "PROGRESS",
            accessor: "id",
        },
    ];

    useEffect(() => {
        async function fetchData() {
            try {
                const cTasks = await fetchTasks();
                setTasks(cTasks);
                console.log(cTasks);
            } catch (error) {
                console.error(error);
            }
        }

        fetchData();
    }, [])

    return (
        <div>
            <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
                <ComplexTable
                    columnsData={columnsDataComplex}
                    tableData={tasks}
                />
            </Box>
        </div>
    )
}