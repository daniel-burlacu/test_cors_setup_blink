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
import MicIcon from "@mui/icons-material/Mic";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import SchoolIcon from "@mui/icons-material/School";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { motion } from "framer-motion";
import { useLanguage } from '@/contexts/LanguageContext';
import bedrockLogo from '../../../public/bedrock.png';
import blockchainLogo from '../../../public/blockchain.png';

const highlight = { color: "#038e3dff" }; // Solana purple highlight
const cardBg = { bgcolor: "#f9f9f9", borderRadius: 2 }; // light cards

export default function InvestorPresentation() {
  const { t } = useLanguage();
  return (
    <Box sx={{ bgcolor: "#fff", color: "#111", py: { xs: 3, sm: 4, md: 6 }, minHeight: "100vh", px: { xs: 2, sm: 3 } }}>
      <Container maxWidth="lg">
        {/* Demo Application Link and Technology Boxes */}
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between', 
          alignItems: { xs: 'center', md: 'flex-start' }, 
          mb: 4,
          gap: { xs: 3, md: 0 }
        }}>
          {/* Title on the left */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ flex: 1, textAlign: 'center', width: '100%' }}
          >
            <Typography 
              variant="h3" 
              gutterBottom 
              sx={{ 
                fontWeight: "bold",
                fontSize: { xs: '1.75rem', sm: '2.25rem', md: '2.75rem', lg: '3rem' }
              }}
            >
              <span style={highlight}>{t.general.brandName}</span>
            </Typography>
            <Typography 
              variant="h6" 
              color="text.secondary" 
              paragraph
              sx={{ 
                fontSize: { xs: '0.875rem', sm: '1rem', md: '1.125rem', lg: '1.25rem' }
              }}
            >
              {t.application.subtitle}
            </Typography>
          </motion.div>

          {/* Right side with button and boxes */}
          <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: { xs: 'center', md: 'flex-end' }, 
            gap: { xs: 3, md: 6 },
            width: { xs: '100%', md: 'auto' }
          }}>
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
                  px: { xs: 2, sm: 3 },
                  py: 1,
                  fontSize: { xs: '0.875rem', sm: '1rem' },
                  "&:hover": { bgcolor: "#058d50ff" },
                }}
              >
                {t.application.viewDemo}
              </Button>
            </motion.div>

            {/* Technology Boxes */}
            <Box sx={{ 
              display: 'flex', 
              flexDirection: { xs: 'column', sm: 'row' },
              gap: { xs: 3, sm: 4 }, 
              mt: 2,
              alignItems: 'center',
              justifyContent: 'center'
            }}>
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
                    width: { xs: 140, sm: 160, md: 180 },
                    height: { xs: 140, sm: 160, md: 180 },
                    textDecoration: 'none',
                    transition: 'transform 0.3s',
                    '&:hover': { transform: 'rotate(45deg) scale(1.05)' }
                  }}
                >
                  <Box sx={{ transform: 'rotate(-45deg)', textAlign: 'center', p: { xs: 1.5, sm: 2 }, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <img
                      src={blockchainLogo.src}
                      alt="Blockchain Technology"
                      style={{ width: '40px', height: '40px', marginBottom: '6px', objectFit: 'contain' }}
                    />
                    <Typography variant="caption" display="block" sx={{ fontWeight: 'bold', color: '#9333ea', mb: 0.5, fontSize: { xs: '0.6rem', sm: '0.65rem', md: '0.7rem' } }}>
                      {t.general.blockchainTitle}
                    </Typography>
                    <Typography variant="caption" display="block" sx={{ fontSize: { xs: '0.55rem', sm: '0.6rem' }, color: '#666', lineHeight: 1.3 }}>
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
                    width: { xs: 140, sm: 160, md: 180 },
                    height: { xs: 140, sm: 160, md: 180 },
                    textDecoration: 'none',
                    transition: 'transform 0.3s',
                    '&:hover': { transform: 'rotate(45deg) scale(1.05)' }
                  }}
                >
                  <Box sx={{ transform: 'rotate(-45deg)', textAlign: 'center', p: { xs: 1.5, sm: 2 }, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <img
                      src={bedrockLogo.src}
                      alt="AWS Bedrock"
                      style={{ width: '40px', height: '40px', marginBottom: '6px', objectFit: 'contain' }}
                    />
                    <Typography variant="caption" display="block" sx={{ fontWeight: 'bold', color: '#f97316', mb: 0.5, fontSize: { xs: '0.6rem', sm: '0.65rem', md: '0.7rem' } }}>
                      {t.general.bedrockTitle}
                    </Typography>
                    <Typography variant="caption" display="block" sx={{ fontSize: { xs: '0.55rem', sm: '0.6rem' }, color: '#666', lineHeight: 1.3 }}>
                      {t.general.bedrockText}
                    </Typography>
                  </Box>
                </Box>
              </motion.div>

              {/* OpenAI Voice Interaction Box */}
              <motion.div
                initial={{ opacity: 0, rotate: 0 }}
                animate={{ opacity: 1, rotate: 45 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                style={{ transformOrigin: 'center' }}
              >
                <Box
                  component="a"
                  href="https://openai.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: 'white',
                    border: '2px solid #16a34a',
                    borderRadius: 2,
                    width: { xs: 140, sm: 160, md: 180 },
                    height: { xs: 140, sm: 160, md: 180 },
                    textDecoration: 'none',
                    transition: 'transform 0.3s',
                    '&:hover': { transform: 'rotate(45deg) scale(1.05)' }
                  }}
                >
                  <Box sx={{ transform: 'rotate(-45deg)', textAlign: 'center', p: { xs: 1.5, sm: 2 }, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <MicIcon sx={{ fontSize: 46, color: '#10a37f', mb: 0.25 }} />
                    <Typography variant="caption" display="block" sx={{ fontWeight: 'bold', color: '#10a37f', mb: 0.5, fontSize: { xs: '0.6rem', sm: '0.65rem', md: '0.7rem' } }}>
                      {t.general.openaiTitle}
                    </Typography>
                    <Typography variant="caption" display="block" sx={{ fontSize: { xs: '0.55rem', sm: '0.6rem' }, color: '#666', lineHeight: 1.3 }}>
                      {t.general.openaiText}
                    </Typography>
                  </Box>
                </Box>
              </motion.div>
            </Box>
          </Box>
        </Box>

        {/* AI Agents Section */}
        <Box sx={{ mt: { xs: 6, md: 8 }, mb: { xs: 4, md: 6 } }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Typography 
              variant="h4" 
              gutterBottom 
              sx={{ 
                textAlign: 'center',
                fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' },
                mb: 1
              }}
            >
              {t.application.aiAgentsTitle}
            </Typography>
            <Typography 
              variant="body1" 
              color="text.secondary" 
              sx={{ 
                textAlign: 'center',
                mb: 4,
                fontSize: { xs: '0.875rem', sm: '1rem' }
              }}
            >
              {t.application.aiAgentsSubtitle}
            </Typography>
          </motion.div>

          <Grid container spacing={3} justifyContent="center">
            {[
              {
                icon: <LocalHospitalIcon sx={{ fontSize: 48, color: "#dc2626" }} />,
                title: t.application.doctorTitle,
                subtitle: t.application.doctorSubtitle,
                description: t.application.doctorDescription,
                color: "#dc2626"
              },
              {
                icon: <FavoriteBorderIcon sx={{ fontSize: 48, color: "#ec4899" }} />,
                title: t.application.wellbeingTitle,
                subtitle: t.application.wellbeingSubtitle,
                description: t.application.wellbeingDescription,
                color: "#ec4899"
              },
              {
                icon: <RestaurantIcon sx={{ fontSize: 48, color: "#f59e0b" }} />,
                title: t.application.nutritionistTitle,
                subtitle: t.application.nutritionistSubtitle,
                description: t.application.nutritionistDescription,
                color: "#f59e0b"
              },
              {
                icon: <SchoolIcon sx={{ fontSize: 48, color: "#3b82f6" }} />,
                title: t.application.trainerTitle,
                subtitle: t.application.trainerSubtitle,
                description: t.application.trainerDescription,
                color: "#3b82f6"
              },
              {
                icon: <HelpOutlineIcon sx={{ fontSize: 48, color: "#8b5cf6" }} />,
                title: t.application.supportTitle,
                subtitle: t.application.supportSubtitle,
                description: t.application.supportDescription,
                color: "#8b5cf6"
              },
            ].map((agent, idx) => (
              <Grid item xs={12} sm={6} md={4} key={idx} display="flex">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  style={{ width: "100%" }}
                >
                  <Card
                    sx={{
                      ...cardBg,
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      transition: "transform 0.3s, box-shadow 0.3s",
                      "&:hover": {
                        transform: "translateY(-8px)",
                        boxShadow: `0 8px 24px ${agent.color}30`
                      }
                    }}
                  >
                    <CardContent sx={{ flexGrow: 1, textAlign: "center", p: 3 }}>
                      <Box sx={{ mb: 2 }}>
                        {agent.icon}
                      </Box>
                      <Typography 
                        variant="h6" 
                        sx={{ 
                          fontWeight: "bold",
                          mb: 0.5,
                          color: agent.color
                        }}
                      >
                        {agent.title}
                      </Typography>
                      <Typography 
                        variant="caption" 
                        display="block"
                        sx={{ 
                          fontWeight: "600",
                          mb: 2,
                          color: "text.secondary",
                          textTransform: "uppercase",
                          letterSpacing: "0.5px"
                        }}
                      >
                        {agent.subtitle}
                      </Typography>
                      <Typography 
                        variant="body2"
                        sx={{ 
                          color: "text.secondary",
                          lineHeight: 1.6
                        }}
                      >
                        {agent.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Business Model */}
        <Box sx={{ mt: { xs: 4, md: 6 } }}>
          <Typography variant="h4" gutterBottom sx={{ fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' } }}>
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
