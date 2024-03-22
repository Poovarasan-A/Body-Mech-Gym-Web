import React from "react";
import { useState, useEffect } from "react";
import { Box, Stack, Typography, Button, TextField } from "@mui/material";
import { exerciseOptions, fetchData } from "../../utils/fetchData";
import HorizontalScrollBar from "./HorizontalScrollBar";

const ExercisePrograms = ({ bodyPart, setBodyPart, setExercises }) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExerciseData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );
      setBodyParts(["all", ...bodyPartsData]);
    };
    fetchExerciseData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );

      const searchedExercises = exercisesData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search)
      );

      setSearch("");
      setExercises(searchedExercises);
    }
  };

  return (
    <Stack alignItems="center" justifyContent="center" mt="40px">
      <Typography fontWeight="700" fontSize="30px" align="center" mb="50px">
        Find Your Better
        <br /> Workout Program
      </Typography>
      <Box position="relative">
        <TextField
          sx={{
            width: { lg: "700px", xs: "200px" },
          }}
          type="text"
          height="70px"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Workouts"
        />
        <Button
          variant="contained"
          color="error"
          sx={{
            backgroundColor: "red",
            position: "absolute",
            right: "0",
            height: "55px",
            width: "130px",
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box>
        <HorizontalScrollBar
          data={bodyParts}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
        />
      </Box>
    </Stack>
  );
};

export default ExercisePrograms;
