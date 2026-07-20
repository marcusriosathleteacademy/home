import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProgramSection from "@/components/ProgramSection";
import CoachSection from "@/components/CoachSection";
import SplitSection from "@/components/SplitSection";
import FacilitiesSection from "@/components/FacilitiesSection";
import ScheduleSection from "@/components/ScheduleSection";
import FaqSection from "@/components/FaqSection";
import ApplySection from "@/components/ApplySection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div id="top" style={{ scrollMarginTop: 128 }}>
      <Header />

      <Hero />

      <ProgramSection />

      <CoachSection />

      <SplitSection
        id="training"
        background="raised"
        eyebrow="Training"
        title="Built In The Gym"
        body="1 hour 30 minutes daily of strength, speed & conditioning, and agility — programmed around your sport, not generic. Every session is logged. Every gain, visible."
        photoPlaceholder="Drop a photo: strength & conditioning training"
        photoSrc="/training-drill.jpg"
        photoAlt="Student-athletes running an agility drill"
        columns="minmax(360px,1.2fr) minmax(280px,1fr)"
      />

      <SplitSection
        id="recovery"
        background="black"
        eyebrow="Recovery"
        title="Rest Is Part Of The Rep"
        body="30 minutes of mobility, stretching, and recovery work daily — the block that keeps you training tomorrow instead of sitting out with an injury."
        photoPlaceholder="Drop a photo: recovery & mobility work"
        photoSrc="/recovery-turf.jpg"
        photoAlt="Student-athletes doing recovery work on the turf"
        reverse
        columns="minmax(280px,1fr) minmax(360px,1.2fr)"
      />

      <SplitSection
        id="academics"
        background="raised"
        eyebrow="Academics"
        title="School Doesn't Stop"
        body="2 hours of supervised study hall and academic guidance every day, working alongside your homeschool or independent study curriculum. No slipping grades to chase a roster spot."
        photoPlaceholder="Drop a photo: study hall session"
        photoSrc="/classroom.png"
        photoAlt="Study hall classroom"
        columns="minmax(360px,1.2fr) minmax(280px,1fr)"
      />

      <SplitSection
        id="life-skills"
        background="black"
        eyebrow="Life Skills"
        title="More Than An Athlete"
        body="1 hour on mindset, discipline, nutrition, and NIL — led by a coach who's navigated recruiting, the NFL, and building a brand from the ground up."
        photoPlaceholder="Drop a photo: mentorship session"
        photoSrc="/coach-whiteboard.jpg"
        photoAlt="Coach Marcus Rios leading a mentorship session"
        reverse
        columns="minmax(280px,1fr) minmax(360px,1.2fr)"
      />

      <FacilitiesSection />

      <ScheduleSection />

      <FaqSection />

      <ApplySection />

      <Footer />
    </div>
  );
}
