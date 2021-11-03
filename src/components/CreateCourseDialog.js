import React, { useState } from "react"
import {
    Dialog,
    DialogContent,
    DialogTitle,
    TextField,
    DialogActions,
    Button
} from "@material-ui/core"
import ErrorMessage from "./ErrorMessage"
import { createCourse } from "../services/courses.service"

const CreateCourseDialog = ({ courses, setCourses, open, setOpen }) => {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [section, setSection] = useState("")
    const [subject, setSubject] = useState("")
    const [room, setRoom] = useState("")
    const [errorMessage, setErrorMessage] = useState([])

    const refreshState = () => {
        setName("")
        setDescription("")
        setSection("")
        setSubject("")
        setRoom("")
        setErrorMessage([])
    }

    const handleClose = () => {
        setOpen(false)
        refreshState()
    }

    const handleSubmitCourse = async () => {
        try {
            const res = await createCourse(name, description, section, subject, room);
            const newCourses = [...courses, res.data]

            // If successful create course
            setErrorMessage([])
            setCourses(newCourses)
            handleClose()
        } catch (error) {
            const message = error.response.data.message;
            setErrorMessage(message);
        }
    };

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Create a new course</DialogTitle>
            <DialogContent>
                <DialogContent>
                    Provide information about the course you wish to complete.
                </DialogContent>
                {errorMessage.length !== 0 && <ErrorMessage message={errorMessage} />}
                <TextField
                    autoFocus
                    fullWidth
                    label="Name"
                    placeholder="Name"
                    margin="normal"
                    variant="outlined"
                    onChange={e => setName(e.target.value)}
                />
                <TextField
                    fullWidth
                    label="Description"
                    placeholder="Description"
                    multiline
                    rows="4"
                    margin="normal"
                    variant="outlined"
                    onChange={e => setDescription(e.target.value)}
                />
                <TextField
                    fullWidth
                    label="Section"
                    placeholder="Section"
                    margin="normal"
                    variant="outlined"
                    onChange={e => setSection(e.target.value)}
                />
                <TextField
                    fullWidth
                    label="Subject"
                    placeholder="Subject"
                    margin="normal"
                    variant="outlined"
                    onChange={e => setSubject(e.target.value)}
                />
                <TextField
                    fullWidth
                    label="Room"
                    placeholder="Room"
                    margin="normal"
                    variant="outlined"
                    onChange={e => setRoom(e.target.value)}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSubmitCourse}
                >
                    Create Course
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default CreateCourseDialog