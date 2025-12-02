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
import { useLanguage } from '@/contexts/LanguageContext';
import bedrockLogo from '../../../public/bedrock.png';
import blockchainLogo from '../../../public/blockchain.png';

const highlight = { color: "#038e3dff" }; // Solana purple highlight
const cardBg = { bgcolor: "#f9f9f9", borderRadius: 2 }; // light cards

export default function InvestorPresentation() {
  const { t } = useLanguage();
  return (
    <Box sx={{ bgcolor: "#fff", color: "#111", py: 6, minHeight: "100vh" }}>
      <Container maxWidth="lg">
        {/* Demo Application Link and Technology Boxes */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 4 }}>
          {/* Title on the left */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ flex: 1 }}
          >
            <Typography variant="h3" gutterBottom sx={{ fontWeight: "bold" }}>
              <span style={highlight}>{t.general.brandName}</span>
            </Typography>
            <Typography variant="h6" color="text.secondary" paragraph>
              {t.application.subtitle}
            </Typography>
          </motion.div>

          {/* Right side with button and boxes */}
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 6 }}>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
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
                {t.application.viewDemo}
              </Button>
            </motion.div>

            {/* Technology Boxes */}
            <Box sx={{ display: 'flex', gap: 4, mt: 2 }}>
              {/* Blockchain Technology Box */}
              <motion.div
                initial={{ opacity: 0, rotate: 0 }}
                animate={{ opacity: 1, rotate: 45 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                style={{ transformOrigin: 'center' }}
              >
                <Box
                  component="a"
                  href="https://solana.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: 'white',
                    border: '2px solid #16a34a',
                    borderRadius: 2,
                    width: 180,
                    height: 180,
                    textDecoration: 'none',
                    transition: 'transform 0.3s',
                    '&:hover': { transform: 'rotate(45deg) scale(1.05)' }
                  }}
                >
                  <Box sx={{ transform: 'rotate(-45deg)', textAlign: 'center', p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <img
                      src={blockchainLogo.src}
                      alt="Blockchain Technology"
                      style={{ width: 50, height: 50, marginBottom: 8, objectFit: 'contain' }}
                    />
                    <Typography variant="caption" display="block" sx={{ fontWeight: 'bold', color: '#9333ea', mb: 0.5, fontSize: '0.7rem' }}>
                      {t.general.blockchainTitle}
                    </Typography>
                    <Typography variant="caption" display="block" sx={{ fontSize: '0.6rem', color: '#666', lineHeight: 1.3 }}>
                      {t.general.blockchainText}
                    </Typography>
                  </Box>
                </Box>
              </motion.div>

              {/* AWS Bedrock Box */}
              <motion.div
                initial={{ opacity: 0, rotate: 0 }}
                animate={{ opacity: 1, rotate: 45 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                style={{ transformOrigin: 'center' }}
              >
                <Box
                  component="a"
                  href="https://aws.amazon.com/bedrock/"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: 'white',
                    border: '2px solid #16a34a',
                    borderRadius: 2,
                    width: 180,
                    height: 180,
                    textDecoration: 'none',
                    transition: 'transform 0.3s',
                    '&:hover': { transform: 'rotate(45deg) scale(1.05)' }
                  }}
                >
                  <Box sx={{ transform: 'rotate(-45deg)', textAlign: 'center', p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <img
                      src={bedrockLogo.src}
                      alt="AWS Bedrock"
                      style={{ width: 50, height: 50, marginBottom: 8, objectFit: 'contain' }}
                    />
                    <Typography variant="caption" display="block" sx={{ fontWeight: 'bold', color: '#f97316', mb: 0.5, fontSize: '0.7rem' }}>
                      {t.general.bedrockTitle}
                    </Typography>
                    <Typography variant="caption" display="block" sx={{ fontSize: '0.6rem', color: '#666', lineHeight: 1.3 }}>
                      {t.general.bedrockText}
                    </Typography>
                  </Box>
                </Box>
              </motion.div>
            </Box>
          </Box>
        </Box>

        {/* Business Model */}
        <Box sx={{ mt: 6 }}>
          <Typography variant="h4" gutterBottom>
            {t.application.businessModel}
          </Typography>
          <Grid container spacing={4}>
            {[
              {
                icon: <PetsIcon sx={{ fontSize: 40, color: "#ee04eaff" }} />,
                title: t.application.clinicsTitle,
                text: t.application.clinicsText,
              },
              {
                icon: <AccountBalanceIcon sx={{ fontSize: 40, color: "#14f195" }} />,
                title: t.application.pharmaTitle,
                text: t.application.pharmaText,
              },
              {
                icon: <CampaignIcon sx={{ fontSize: 40, color: "#ff9800" }} />,
                title: t.application.campaignsTitle,
                text: t.application.campaignsText,
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
              {t.application.joinJourney}
            </Typography>
            <Typography variant="h6" color="text.secondary" paragraph>
              {t.application.journeyDescription}
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
                {t.application.contactUs}
              </Button>
            </Stack>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
}
