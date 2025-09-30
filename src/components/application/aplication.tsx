// src/pages/InvestorPresentation.tsx
import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Stack,
} from "@mui/material";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import PetsIcon from "@mui/icons-material/Pets";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import CampaignIcon from "@mui/icons-material/Campaign";
import { motion } from "framer-motion";

const highlight = { color: "#14f195" }; // Solana green
const cardBg = { bgcolor: "#1e1e1e", borderRadius: 2 };

export default function InvestorPresentation() {
  return (
    <Box sx={{ bgcolor: "#000", color: "white", py: 6, minHeight: "100vh" }}>
      <Container maxWidth="lg">
        {/* Demo Application Link */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "right", marginBottom: "20px" }}
        >
          <Button
            href="https://saf-frontend-delta.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            variant="contained"
            sx={{
              bgcolor: "#9945ff",
              color: "white",
              textTransform: "none",
              fontWeight: "bold",
              borderRadius: "8px",
              px: 3,
              py: 1,
              "&:hover": { bgcolor: "#7a2ee6" },
            }}
          >
            🚀 View Demo Application
          </Button>
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h3" gutterBottom sx={{ fontWeight: "bold" }}>
            The <span style={highlight}>Solana Ark Foundation</span>
          </Typography>
          <Typography variant="h6" color="gray" paragraph>
            Revolutionizing veterinary & animal health data
          </Typography>
        </motion.div>

        {/* Problem / Solution */}
        <Grid container spacing={4} sx={{ mt: 4 }}>
          {[
            {
              title: "The Problem",
              text: "Clinics and shelters lack digital tools. Pharma, insurance, and food companies lack structured, real-world animal data. Current solutions are fragmented, expensive, and inaccessible.",
            },
            {
              title: "Our Solution",
              text: "Free platform for clinics and shelters that generates standardized data. After 3 months free trial, companies subscribe annually. Built-in product campaigns and AI-driven recommendations.",
            },
          ].map((item, idx) => (
            <Grid size={{ xs:12, md:6}} key={idx}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
              >
                <Card sx={cardBg}>
                  <CardContent>
                    <Typography variant="h5" gutterBottom>
                      {item.title}
                    </Typography>
                    <Typography>{item.text}</Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Business Model */}
        <Box sx={{ mt: 6 }}>
          <Typography variant="h4" gutterBottom>
            Business Model
          </Typography>
          <Grid container spacing={4}>
            {[
              {
                icon: <PetsIcon sx={{ fontSize: 40, color: "#9945ff" }} />,
                title: "Clinics & Shelters",
                text: "Free access, maximum adoption.",
              },
              {
                icon: (
                  <AccountBalanceIcon
                    sx={{ fontSize: 40, color: "#14f195" }}
                  />
                ),
                title: "Pharma / Insurance",
                text: "Annual subscriptions (€25k–€50k per year).",
              },
              {
                icon: (
                  <CampaignIcon sx={{ fontSize: 40, color: "#ffeb3b" }} />
                ),
                title: "Campaigns",
                text: "Sponsored sales campaigns (€5k–€20k each).",
              },
            ].map((item, idx) => (
              <Grid size={{ xs:12, md:4}}  key={idx}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.2 }}
                >
                  <Card sx={cardBg}>
                    <CardContent>
                      {item.icon}
                      <Typography variant="h6">{item.title}</Typography>
                      <Typography>{item.text}</Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Market & Revenue */}
        <Box sx={{ mt: 6 }}>
          <Typography variant="h4" gutterBottom>
            Market & Revenue
          </Typography>
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Typography>
              <strong>Global Pet Care:</strong> $246B <br />
              <strong>Animal Health Pharma:</strong> $42B <br />
              <strong>Insurance Market:</strong> $9.3B → $30B by 2033 <br />
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <Box sx={{ mt: 3, p: 3, bgcolor: "#1e1e1e", borderRadius: 2 }}>
              <Typography variant="h6" gutterBottom>
                Projections
              </Typography>
              <ul>
                <li>
                  <strong>Year 1:</strong> 500 clinics, 10 companies → €500K–€1M
                </li>
                <li>
                  <strong>Year 3:</strong> 5,000 clinics, 100+ companies → €5M+
                </li>
                <li>
                  <strong>Year 5:</strong> 25,000 clinics, 300+ companies →
                  €20M+
                </li>
              </ul>
            </Box>
          </motion.div>
        </Box>

        {/* Closing */}
        <Box sx={{ mt: 8, textAlign: "center" }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <ShowChartIcon sx={{ fontSize: 60, color: "#14f195" }} />
            <Typography variant="h4" gutterBottom sx={{ mt: 2 }}>
              Join Us on the Journey
            </Typography>
            <Typography variant="h6" color="gray" paragraph>
              Building the global animal health data backbone, free for clinics,
              valuable for industries, life-changing for pets.
            </Typography>
            <Stack direction="row" spacing={2} justifyContent="center">
              <Button
                variant="contained"
                sx={{ bgcolor: "#9945ff", color: "white" }}
              >
                Request Investor Deck
              </Button>
              <Button
                variant="outlined"
                sx={{ borderColor: "#14f195", color: "#14f195" }}
              >
                Contact Us
              </Button>
            </Stack>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
}
