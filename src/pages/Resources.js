import React, { useState } from "react";
import Navbar from "../components/Navbar";
import {
  Container,
  Typography,
  Grid,
  Button,
  Card,
  CardContent,
  Dialog,
  DialogTitle,
  DialogContent,
} from "@mui/material";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import BathtubIcon from "@mui/icons-material/Bathtub";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import CardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Resources() {
  const [expandedIdx, setExpandedIdx] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const resources = [
    {
      title: "Dressing Tips for Stroke Survivors",
      description:
        "Learn practical techniques and tools to make dressing easier after a stroke.",
      content: (
        <>
          <Typography paragraph>
            Dressing after a stroke can be challenging due to limited mobility,
            weakness, or coordination difficulties. Here are some practical tips
            and tools to help make dressing safer and simpler:
          </Typography>
          <Typography variant="subtitle1" sx={{ fontWeight: "bold", mt: 2 }}>
            Choose Easy-to-Wear Clothing
          </Typography>
          <Typography paragraph>
            Opt for clothes with front fastenings like buttons or Velcro,
            elastic waistbands, and loose-fitting garments. Avoid tight or
            complicated clothing that requires excessive movement or dexterity.
          </Typography>
          <Typography variant="subtitle1" sx={{ fontWeight: "bold", mt: 2 }}>
            Use Adaptive Tools
          </Typography>
          <Typography paragraph>
            Consider using dressing aids such as button hooks, zipper pulls, and
            long-handled shoehorns. These tools can help you manage fasteners
            and reach difficult areas more easily.
          </Typography>
          <Typography variant="subtitle1" sx={{ fontWeight: "bold", mt: 2 }}>
            Develop a Dressing Routine
          </Typography>
          <Typography paragraph>
            Establish a consistent sequence for dressing, such as dressing the
            affected side first. This can improve efficiency and reduce
            frustration.
          </Typography>
          <Typography variant="subtitle1" sx={{ fontWeight: "bold", mt: 2 }}>
            Safety Tips
          </Typography>
          <Typography paragraph>
            Sit down while dressing to maintain balance, and use sturdy chairs
            or grab bars for support. Take your time and avoid rushing to
            prevent falls or injuries.
          </Typography>
          <Typography paragraph>
            Consult with occupational therapists who can provide personalized
            strategies and recommend specific adaptive equipment based on your
            needs.
          </Typography>
        </>
      ),
      icon: CheckroomIcon,
    },
    {
      title: "Driving After Stroke",
      description:
        "Learn how to safely return to driving, evaluate your readiness, and explore adaptive options to help you stay independent on the road.",
      content: (
        <>
          <Typography>
            Regaining the ability to drive after a stroke can bring back a
            valuable sense of independence—but it’s natural to feel uncertain
            about getting behind the wheel. While the freedom driving offers is
            empowering, ensuring your safety and the safety of others is
            essential.
          </Typography>
          <Typography variant="subtitle1" sx={{ fontWeight: "bold", mt: 2 }}>
            Important Considerations Before Returning to Driving
          </Typography>
          <ul>
            <li>
              Talk to your healthcare provider to determine whether it’s safe
              for you to resume driving and whether any vehicle modifications
              are necessary.
            </li>
            <li>
              Check with your state’s Department of Motor Vehicles (DMV)
              regarding any reporting requirements—some states may require your
              physician to submit medical clearance before you can legally
              drive.
            </li>
            <li>
              Be aware of any additional local or state-specific guidelines that
              may apply.
            </li>
          </ul>
          <Typography variant="subtitle1" sx={{ fontWeight: "bold", mt: 2 }}>
            Modifying Your Vehicle After Stroke
          </Typography>
          <ul>
            <li>
              Reach out to a certified driver rehabilitation specialist to
              evaluate your current driving capacity. These professionals can
              determine whether modifications are needed and suggest suitable
              equipment.
            </li>
            <li>
              Consider enrolling in an adaptive driving program. These programs,
              often offered by rehabilitation centers for a fee, can help you
              learn how to use modified equipment safely. Your local DMV may
              also provide information on driver safety programs and training
              specific to stroke recovery.
            </li>
          </ul>
        </>
      ),
      icon: DirectionsCarIcon,
    },
    {
      title: "Bathing Tips for Stroke Survivors",
      description:
        "Find step-by-step tips and helpful tools for safe, comfortable bathing after a stroke",
      content: (
        <>
          <Typography>
          Maintaining hygiene after a stroke is essential, but it often requires thoughtful preparation and added safety measures. The following tips can help make bathing easier, safer, and more manageable during recovery.
          </Typography>
          <Typography variant="subtitle1" sx={{ fontWeight: "bold", mt: 2 }}>
            Preparing for a Safe Bath or Shower
          </Typography>
          <ul>
            <li>
              Whenever possible, opt for a shower rather than a bathtub, as
              showers generally pose a lower risk of slipping or falling.
            </li>
            <li>
              If a bathtub is necessary, consider placing a specially designed
              seat at the edge of the tub to assist with getting in and out.
            </li>
            <li>
              A bath bench can offer extra support and stability—various types
              are available at most pharmacies or medical supply stores.
            </li>
            <li>
              Installing grab bars in the bathing area can improve safety and
              ease of movement.
            </li>
            <li>
              Use non-slip mats with suction or adhesive strips inside the
              shower or tub to reduce fall risk.
            </li>
            <li>
              Set out all needed items—such as soap, towels, and
              washcloths—before beginning.
            </li>
            <li>
              Always test the water temperature with your wrist before getting
              in to avoid burns.
            </li>
            <li>
              If assistance may be needed, make sure someone is nearby or have a
              way to call for help, such as a bell or emergency alert device.
            </li>
          </ul>
          <Typography variant="subtitle1" sx={{ fontWeight: "bold", mt: 2 }}>
            Useful Bathing Tools and Adaptations
          </Typography>
          <ul>
            <li>
              A hand-held shower head with a flexible hose can help direct water
              exactly where it’s needed.
            </li>
            <li>
              For hard-to-reach areas, use a long-handled sponge or a wash mitt
              that wraps around the hand.
            </li>
            <li>
              Placing a bar of soap inside a nylon stocking and tying it to a
              grab bar can keep it from slipping away.
            </li>
            <li>
              Liquid soap in a pump dispenser is easier to use than bar soap.
            </li>
            <li>
              Shampoo and conditioner in flip-top plastic bottles are more
              manageable than twist caps.
            </li>
            <li>
              Choose lightweight washcloths made from thin terrycloth for easier
              handling.
            </li>
            <li>
              After your shower, wear slipper socks with non-skid soles to
              prevent slips.
            </li>
          </ul>
          <Typography variant="subtitle1" sx={{ fontWeight: "bold", mt: 2 }}>
            Washing and Skin Care Tips
          </Typography>
          <ul>
            <li>
              To wash your stronger arm, sit on a bench and rub it over a soapy
              washcloth held between your knees.
            </li>
            <li>
              Rather than drying with a towel, you can wear a terrycloth robe
              and slipper socks to help absorb moisture.
            </li>
            <li>
              Apply lotion to avoid dry skin: sit down, place lotion on your
              thigh, and use your stronger hand to spread it.
            </li>
            <li>
              For your stronger hand, dispense lotion into the palm of your
              affected hand and rub the back of your stronger hand against it.
            </li>
            <li>
              Reuse empty roll-on deodorant bottles to store and apply lotion,
              cologne, or aftershave easily.
            </li>
            <li>
              When applying ointments to avoid infections or skin issues, use
              cotton swabs to maintain hygiene.
            </li>
          </ul>
          <Typography variant="subtitle1" sx={{ fontWeight: "bold", mt: 2 }}>
            Safely Moving in the Bathroom
          </Typography>
          <ul>
            <li>
              Before attempting any bathroom transfers, practice with a
              therapist to build confidence and ensure proper technique:
            </li>
            <li>
              Prepare your space in advance—gather supplies and remove
              obstacles.
            </li>
            <li>
              If using a wheelchair, lock the brakes and swing the footrests
              aside.
            </li>
            <li>
              Move slowly and carefully, ensuring your weight is supported as
              much as possible.
            </li>
            <li>
              Focus on proper body positioning and make sure you can clearly see
              where you’re going.
            </li>
            <li>
              If someone is assisting, they should maintain a stable stance and
              stay close to you to avoid injury.
            </li>
            <li>
              If using a bathtub, leave the water in the tub until you’re
              finished. The buoyancy of the water can help you lift yourself
              more easily.
            </li>
          </ul>
        </>
      ),
      icon: BathtubIcon,
    },
    {
      title: "Stress Management After Stroke",
      description:
        "Discover practical tips for managing stress and supporting your emotional well-being after a stroke.",
      link: "https://www.heart.org/en/-/media/Healthy-Living-Files/Infographics/Stress_Strain_Body_and_Brain_Infographic.pdf?sc_lang=en",
      icon: SelfImprovementIcon,
    },
    {
      title: "Healthy Recipes for Stroke Survivors",
      description:
        "Enjoy delicious, heart-healthy meals with easy recipes designed for stroke recovery.",
      link: "https://www.stroke.org/en/-/media/Stroke-Files/Simplygood-Cookbook/SimplyGoodCookbook_11052020.pdf?sc_lang=en",
      icon: RestaurantIcon,
    },
    {
      title: "Shoulder, Arm, and Hand Exercises",
      description:
        "Improve mobility and strength in your shoulders, arms, and hands after a stroke. Follow guided exercises designed to support your recovery and restore functional movement.",
      link: "https://www.youtube.com/watch?v=MS2hx7dOAes",
      icon: FitnessCenterIcon,
    },
    {
      title: "Leg, Ankle, and Foot Exercises",
      description:
        "Strengthen your legs, ankles, and feet with targeted exercises to enhance balance, walking ability, and lower body strength post-stroke.",
      link: "https://www.youtube.com/watch?v=6BzBTUPqOPE",
      icon: DirectionsRunIcon,
    },
    {
      title: "Balance Exercises",
      description:
        "Work on your stability and reduce fall risk with simple balance exercises tailored for stroke recovery. These routines help you regain confidence in daily activities.",
      link: "https://www.youtube.com/watch?v=BEd-TMi7Le0",
      icon: AccessibilityNewIcon,
    },
  ];

  return (
    <div>
      <Navbar />
      <Container maxWidth="lg" sx={{ mt: 8 }}>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ fontWeight: "bold", color: "#b71c1c" }}
        >
          Resources
        </Typography>
        <Grid
          container
          spacing={3}
          justifyContent="center"
          alignItems="stretch"
          sx={{ mt: 4 }}
        >
          {resources.map((resource, idx) => {
            const expanded = expandedIdx === idx;
            const handleExpandClick = () => {
              setExpandedIdx(expanded ? null : idx);
            };
            return (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                key={idx}
                sx={{ display: "flex" }}
              >
                <Card
                  sx={{
                    borderRadius: 4,
                    boxShadow: 2,
                    mb: 3,
                    border: "1px solid #e0e0e0",
                    backgroundColor: "#ffffff",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    width: "100%",
                    minHeight: 250,
                    minWidth: 275,
                    maxWidth: 400,
                    maxHeight: 250,
                  }}
                >
                  <CardHeader
                    avatar={
                      <resource.icon sx={{ fontSize: 28, color: "#b71c1c" }} />
                    }
                    title={
                      <Typography sx={{ fontWeight: "bold" }}>
                        {resource.title}
                      </Typography>
                    }
                    action={
                      <IconButton
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                      >
                        <ExpandMoreIcon />
                      </IconButton>
                    }
                  />
                  <CardContent
                    sx={{
                      flexGrow: 1,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography variant="body2">
                      {resource.description}
                    </Typography>
                  </CardContent>
                  <CardContent>
                    {resource.content ? (
                      <>
                        <Button
                          onClick={() => {
                            setModalContent({
                              title: resource.title,
                              content: resource.content,
                            });
                            setOpenModal(true);
                          }}
                          sx={{
                            color: "#b71c1c",
                            fontWeight: "bold",
                            textTransform: "none",
                            justifyContent: "flex-start",
                          }}
                        >
                          Learn More &nbsp; &gt;
                        </Button>
                      </>
                    ) : (
                      <Button
                        href={resource.link}
                        target="_blank"
                        sx={{
                          color: "#b71c1c",
                          fontWeight: "bold",
                          textTransform: "none",
                          px: 0,
                          "&:hover": { textDecoration: "underline" },
                        }}
                      >
                        Visit Resource &nbsp; &gt;
                      </Button>
                    )}
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
      <Dialog
        open={openModal}
        onClose={() => setOpenModal(false)}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle sx={{ fontWeight: "bold", color: "#b71c1c" }}>
          {modalContent?.title}
        </DialogTitle>
        <DialogContent dividers>{modalContent?.content}</DialogContent>
      </Dialog>
    </div>
  );
}

export default Resources;
