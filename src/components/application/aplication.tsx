"use client";

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

const highlight = { color: "#038e3dff" }; // Solana purple highlight
const cardBg = { bgcolor: "#f9f9f9", borderRadius: 2 }; // light cards

export default function InvestorPresentation() {
  return (
    <Box sx={{ bgcolor: "#fff", color: "#111", py: 6, minHeight: "100vh" }}>
      <Container maxWidth="lg">
        {/* Demo Application Link */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "right", marginBottom: "20px" }}
        >
          <Button
            href="https://develop.d1ir61rx2rh3k4.amplifyapp.com/"
            target="_blank"
            rel="noopener noreferrer"
            variant="contained"
            sx={{
              bgcolor: "#036c2aff",
              color: "white",
              textTransform: "none",
              fontWeight: "bold",
              borderRadius: "8px",
              px: 3,
              py: 1,
              "&:hover": { bgcolor: "#058d50ff" },
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
          <span style={highlight}>ANIVERA</span>
          </Typography>
          <Typography variant="h6" color="text.secondary" paragraph>
            Revolutionizing veterinary & animal health data
          </Typography>
        </motion.div>

        {/* Business Model */}
        <Box sx={{ mt: 6 }}>
          <Typography variant="h4" gutterBottom>
            Business Model
          </Typography>
          <Grid container spacing={4}>
            {[
              {
                icon: <PetsIcon sx={{ fontSize: 40, color: "#ee04eaff" }} />,
                title: "Clinics & Shelters",
                text: "Free access, maximum adoption.",
              },
              {
                icon: <AccountBalanceIcon sx={{ fontSize: 40, color: "#14f195" }} />,
                title: "Pharma / Insurance",
                text: "Annual subscriptions (€25k–€50k per year).",
              },
              {
                icon: <CampaignIcon sx={{ fontSize: 40, color: "#ff9800" }} />,
                title: "Campaigns",
                text: "Sponsored sales campaigns (€5k–€20k each).",
              },
            ].map((item, idx) => (
              <Grid item xs={12} md={4} key={idx} display="flex">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.2 }}
                  style={{ width: "100%" }}
                >
                  <Card
                    sx={{
                      ...cardBg,
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    <CardContent sx={{ flexGrow: 1, textAlign: "center" }}>
                      {item.icon}
                      <Typography variant="h6" gutterBottom>
                        {item.title}
                      </Typography>
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
            <Box sx={{ mt: 3, p: 3, bgcolor: "#f3f3f3", borderRadius: 2 }}>
              <Typography variant="h6" gutterBottom>
                Projections
              </Typography>
              <ul>
                <li>
                  <strong>Year 1:</strong> 500 clinics, 10 companies →
                  €500K–€1M
                </li>
                <li>
                  <strong>Year 3:</strong> 5,000 clinics, 100+ companies →
                  €5M+
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
            <Typography variant="h6" color="text.secondary" paragraph>
              Building the global animal health data backbone, free for clinics,
              valuable for industries, life-changing for pets.
            </Typography>
            <Stack direction="row" spacing={2} justifyContent="center">
              {/* <Button
                variant="contained"
                sx={{ bgcolor: "#9945ff", color: "white" }}
              >
                Request Investor Deck
              </Button> */}
              <Button
                href="https://www.solana-ark-foundation.xyz/contactus"
                target="_blank"
                rel="noopener noreferrer"
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
