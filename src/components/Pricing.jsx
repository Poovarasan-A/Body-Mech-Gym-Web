import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import { Check, Clear } from "@mui/icons-material";

const Pricing = () => {
  return (
    <>
      <Typography variant="h4" fontWeight="700" mt="90px" align="center">
        Subscriptions
      </Typography>
      <Stack
        direction={{ lg: "row", xs: "column" }}
        mt="60px"
        mb="50px"
        justifyContent="space-around"
        alignItems="center"
      >
        <Card
          variant="outlined"
          sx={{
            width: "280px",
            p: "15px",
            pt: "30px",
            border: "3px solid red",
            borderRadius: "10px",
            mb: { lg: "0px", xs: "40px" },
          }}
        >
          <Chip
            variant="plain"
            color="error"
            label="Basic"
            sx={{ fontSize: "16px", mb: "10px", ml: "5px" }}
          />
          <Typography
            variant="h4"
            fontWeight="600"
            mt="10px"
            lineHeight="50px"
            align="center"
          >
            ₹1500 / <span style={{ fontSize: "16px" }}>Month</span>
          </Typography>
          <Divider inset="none" />
          <List sx={{ mt: "10px", mb: "10px" }}>
            <ListItem>
              <Check sx={{ mr: "10px" }} />
              Beginner Friendly
            </ListItem>
            <ListItem>
              <Clear sx={{ mr: "10px" }} />
              No Extra Validity
            </ListItem>
            <ListItem>
              <Clear sx={{ mr: "10px" }} />
              No Gym Accessories
            </ListItem>
          </List>
          <Divider inset="none" />
          <CardActions sx={{ mt: "20px" }}>
            <Typography fontWeight="600" fontSize="18px" mr="10px">
              Monthly Plan
            </Typography>
            <Button
              variant="solid"
              color="danger"
              sx={{ border: "2px solid red", color: "red" }}
            >
              Select
            </Button>
          </CardActions>
        </Card>
        <Card
          variant="solid"
          sx={{
            width: "280px",
            p: "15px",
            pt: "30px",
            border: "3px solid red",
            borderRadius: "10px",
            mb: { lg: "0px", xs: "40px" },
          }}
        >
          <Chip
            variant="plain"
            label="Gold"
            color="error"
            sx={{ fontSize: "16px", mb: "10px", ml: "5px" }}
          />
          <Typography
            variant="h4"
            fontWeight="600"
            mt="10px"
            lineHeight="50px"
            align="center"
          >
            ₹9000 / <span style={{ fontSize: "16px" }}>Quarter</span>
          </Typography>
          <Divider inset="none" />
          <List sx={{ mt: "10px", mb: "10px" }}>
            <ListItem>
              <Check sx={{ mr: "10px" }} />
              Intermediate Friendly
            </ListItem>
            <ListItem>
              <Check sx={{ mr: "10px" }} />
              Pay Quarter Get Yearly
            </ListItem>
            <ListItem>
              <Clear sx={{ mr: "10px" }} />
              Only Gym T-Shirt
            </ListItem>
          </List>
          <Divider inset="none" />
          <CardActions sx={{ mt: "20px" }}>
            <Typography fontWeight="600" fontSize="17px" mr="5px">
              Quarterly Plan
            </Typography>
            <Button
              variant="solid"
              color="danger"
              sx={{ border: "2px solid red", color: "red" }}
            >
              Select
            </Button>
          </CardActions>
        </Card>
        <Card
          variant="solid"
          sx={{
            width: "280px",
            p: "15px",
            pt: "30px",
            border: "3px solid red",
            borderRadius: "10px",
          }}
        >
          <Chip
            variant="plain"
            label="Premium"
            color="error"
            sx={{ fontSize: "16px", mb: "10px", ml: "5px" }}
          />
          <Typography
            variant="h4"
            fontWeight="600"
            mt="10px"
            lineHeight="50px"
            align="center"
          >
            ₹18000 / <span style={{ fontSize: "16px" }}>Year</span>
          </Typography>
          <Divider inset="none" />
          <List sx={{ mt: "10px", mb: "10px" }}>
            <ListItem>
              <Check sx={{ mr: "10px" }} />
              Pro Fit Journey
            </ListItem>
            <ListItem>
              <Check sx={{ mr: "10px" }} />
              Get +1 Year Free
            </ListItem>
            <ListItem>
              <Check sx={{ mr: "10px" }} />
              Get all Accessories
            </ListItem>
          </List>
          <Divider inset="none" />
          <CardActions sx={{ mt: "20px" }}>
            <Typography fontWeight="600" fontSize="18px" mr="10px">
              Yearly Plan
            </Typography>
            <br />
            <Button
              variant="solid"
              color="danger"
              sx={{ border: "2px solid red", color: "red" }}
            >
              Select
            </Button>
          </CardActions>
        </Card>
      </Stack>
      <Typography fontStyle="italic" fontSize="18px" align="center" mb="60px">
        *please ensure that no subscriptions have refund policies*
      </Typography>
    </>
  );
};

export default Pricing;
