import { label } from "framer-motion/client";
// Get in Touch Routes
import About from '../../../pages/About';
import Contact from '../../../pages/Contact';
// Get in Touch Routes

// Medicine Routes
import Medicine from '../../../pages/Medicine';
import Tablets from '../../../pages/Medicines/Tablets';
import Capsule from '../../../pages/Medicines/Capsules';
import Syrups from '../../../pages/Medicines/Syrups';
import Injections from '../../../pages/Medicines/Injections';
import Drops from '../../../pages/Medicines/Drops';
import Inhalers from '../../../pages/Medicines/Inhalers';
import Ointment from '../../../pages/Medicines/Ointment';
import Powders from '../../../pages/Medicines/Powders';
import Suppositories from '../../../pages/Medicines/Suppositories';
import Others from '../../../pages/Medicines/Others';
// Medicine Routes

// Personal Care Routes
// Skin Care Routes
import Personalcare from '../../../pages/Personalcare'
import BabyMomCare from '../../../pages/Baby-Mom-Care/BabyMomCare'
import BabyBathAndHygne from '../../../pages/Baby-Mom-Care/BabyBathAndHygne'
import SkinCare from '../../../pages/Skin-Care/SkinCare'
// Skin Care Routes

// Adult Care Routes
import AdultCare from '../../../pages/adult-care/AdultCare'
// Adult Care Routes

// Haircare Routes
import HairCare from "../../../pages/hair-care/HairCare";
import HairOils from "../../../pages/hair-care/HairOils";
// Haircare Routes

// Cream Routes
import CosmeticCream from "../../../pages/creams/cosmetic-creams/CosmeticCream";
import MedicatedCream from "../../../pages/creams/medicated-creams/MedicatedCream";
// Cream Routes

// SexualWellness Routes
import SexualWellness from "../../../pages/sexual-wellness/SexualWellness";
// SexualWellness Routes

// OralCare Routes
import OralCare from "../../../pages/oral-care/OralCare";
// OralCare Routes
// Personal Care Routes


// HealthCare Routes
import HeartCare from "../../../pages/health-care/HeartCare";
import EyeCare from "../../../pages/health-care/eye-care/EyeCare";
import DigestiveCare from "../../../pages/health-care/digestive-care/DigestiveCare";
import KidneyCare from "../../../pages/health-care/KidneyCare";
import LiverCare from "../../../pages/health-care/LiverCare";
import BoneAndJointCare from "../../../pages/health-care/BoneAndJointCare";
import PilesFissureAndFistula from "../../../pages/health-care/PilesFissureAndFistula";
import ImmunityBoosters from "../../../pages/health-care/ImmunityBoosters";
import WeightManagement from "../../../pages/health-care/WeightManagement";
import RespiratoryHealth from "../../../pages/health-care/RespiratoryHealth";
import DermaCare from "../../../pages/health-care/DermaCare";
import MentalWellness from "../../../pages/health-care/MentalWellness";
import PainRelief from "../../../pages/health-care/PainRelief";
import FirstAidBox from "../../../pages/health-care/FirstAidBox";
// HealthCare Routes

// Vitamins and Supplements Routes
import MultiVitamins from "../../../pages/vitamins-and-supplements/MultiVitamins";
import MultiMinerals from "../../../pages/vitamins-and-supplements/MultiMinerals";
import Antioxidants from "../../../pages/vitamins-and-supplements/Antioxidants";
import CalciumAndMinerals from "../../../pages/vitamins-and-supplements/CalciumAndMinerals";
import VitaminsAtoZ from "../../../pages/vitamins-and-supplements/VitaminsAtoZ";
import ProteinSupplements from "../../../pages/vitamins-and-supplements/ProteinSupplements";
import SupplementProwders from "../../../pages/vitamins-and-supplements/SupplementProwders";
import MineralSupplements from "../../../pages/vitamins-and-supplements/MineralSupplements";
import Omega3AndFishOil from "../../../pages/vitamins-and-supplements/Omega3AndFishOil";
// Vitamins and Supplements Routes

// Dibetes Care Routes
import TestStripsAndLancets from "../../../pages/diabetes-care/TestStripsAndLancets";
import DiabeticSupplements from "../../../pages/diabetes-care/DiabeticSupplements";
import DiabeticSkinCare from "../../../pages/diabetes-care/DiabeticSkinCare";
import BloodGlucoseMonitors from "../../../pages/diabetes-care/BloodGlucoseMonitors";
import DiabeticFoods from "../../../pages/diabetes-care/DiabeticFoods";
import SugarSubstitutes from "../../../pages/diabetes-care/SugarSubstitutes";
import DiabeticAccessories from "../../../pages/diabetes-care/DiabeticAccessories";
import DiabeticTestKits from "../../../pages/diabetes-care/DiabeticTestKits";
import FairAndLovely from "../../../pages/creams/cosmetic-creams/FairAndLovely";
import DiabeticMedicines from "../../../pages/diabetes-care/DiabeticMedicines";
import DiabetesAyurvedicMedicines from "../../../pages/diabetes-care/DiabetesAyurvedicMedicines";
import DiabetesHomeopathicMedicines from "../../../pages/diabetes-care/DiabetesHomeopathicMedicines";
import DiabetesHerbalMedicines from "../../../pages/diabetes-care/DiabetesHerbalMedicines";
import SyringsAndPens from "../../../pages/diabetes-care/SyringsAndPens";
// Dibetes Care Routes

// Health Devices Routes
import SupportBraces from "../../../pages/health-devices/SupportBraces";
import Thermometer from "../../../pages/health-devices/Thermometer";
import BloodPressureMonitors from "../../../pages/health-devices/BloodPressureMonitors";
import PulseOximeters from "../../../pages/health-devices/PulseOximeters";
import WeightingScales from "../../../pages/health-devices/WeightingScales";
import NebulizersAndVapourizers from "../../../pages/health-devices/NebulizersAndVapourizers";
import Glucometers from "../../../pages/health-devices/Glucometers";
import FirstAidDevices from "../../../pages/health-devices/FirstAidDevices";
import Massagers from "../../../pages/health-devices/Massagers";
import Oximeters from "../../../pages/health-devices/Oximeters";
import TensUnit from "../../../pages/health-devices/TensUnit";
import HealthCare from "../../../pages/HealthCare";
import VitaminsAndSupplements from "../../../pages/VitaminsAndSupplements";
import { Outlet } from "react-router-dom";
import Cream from "../../../pages/Cream";
import DiabetesCare from "../../../pages/DiabetesCare";
import HealthDevices from "../../../pages/HealthDevices";

// Health Devices Routes



export const MENU = [

  { label: "Medicines", to: "all-medicines", element:<Medicine/>,
    children: [
      { label: "Tablets", to: "all-medicines/tablets", element: <Tablets/> },
      { label: "Capsules", to: "all-medicines/capsules", element: <Capsule/> },
      { label: "Syrups", to: "all-medicines/syrups", element: <Syrups/> },
      { label: "Injections", to: "all-medicines/injections", element: <Injections/> },
      { label: "Drops", to: "all-medicines/drops", element: <Drops/> },
      { label: "Inhalers", to: "all-medicines/inhalers", element: <Inhalers/> },
      { label: "Ointments", to: "all-medicines/ointments", element: <Ointment/> },
      { label: "Powders", to: "all-medicines/powders", element: <Powders/> },
      { label: "Suppositories", to: "all-medicines/suppositories", element: <Suppositories/> },
      { label: "Others", to: "all-medicines/others", element: <Others/> },
    ]
  },

  { label: "Personal Care", to: "all-personal-care", element:<Personalcare/>,
        children: [
              { label: "Baby & Mom Care", to: "all-personal-care/baby-and-mom-care", element: <BabyMomCare/>,
        children: [
              { label: "Baby Care", to: "all-personal-care/baby-and-mom-care/baby-care", },
              { label: "Mom Care", to: "all-personal-care/baby-and-mom-care/mom-care",  },
              { label: "Diapers & Wipes", to: "all-personal-care/baby-and-mom-care/diapers-and-wipes", },
              { label: "Feedings", to: "all-personal-care/baby-and-mom-care/feedings", },
              { label: "Baby Lotion & Moisture Creams", to: "all-personal-care/baby-and-mom-care/baby-lotion-and-moisture-creams", },
              { label: "Maternity", to: "all-personal-care/baby-and-mom-care/maternity", },  
              { label: "Baby Bath & Hygynes", to: "all-personal-care/baby-and-mom-care/baby-bath-and-hygynes", element: <BabyBathAndHygne/> },
              { label: "Baby Healthcare", to: "all-personal-care/baby-and-mom-care/baby-healthcare", },
              { label: "Women Multivitamins", to: "all-personal-care/baby-and-mom-care/women-multivitamins", },
              { label: "Women Intiment Care", to: "all-personal-care/baby-and-mom-care/women-intiment-care", },
              { label: "Ovolution Test Kit", to: "all-personal-care/baby-and-mom-care/ovolution-test-kit", },
              { label: "Sanitary Pads", to: "all-personal-care/baby-and-mom-care/sanitary-pads", },
              { label: "Nutritional Drinks", to: "all-personal-care/baby-and-mom-care/nutritional-drinks", },
            ]
           },

          { label: "Skin Care", to: "all-personal-care/skin-care", element:<SkinCare/>,
            children: [
              { label: "Skin Cream", to: "all-personal-care/skin-care/all-skin-cream",  },
              { label: "Skin & Body Soap", to: "all-personal-care/skin-care/all-skin-and-body-soap" },
              { label: "Face Serum", to: "all-personal-care/skin-care/all-face-serum" },
              { label: "Acne Care", to: "all-personal-care/skin-care/all-acne-care", },
              { label: "Moisturizer Creams", to: "all-personal-care/skin-care/all-moisturizer-creams" },
              { label: "Moisturizer Lotions", to: "all-personal-care/skin-care/all-moisturizer-lotions" },
              { label: "Moisturizer Gels", to: "all-personal-care/skin-care/all-moisturizering-gels" },
              { label: "Mosquito Repellents", to: "all-personal-care/skin-care/all-mosquito-repellents" },
              { label: "Body Wash", to: "all-personal-care/skin-care/all-body-wash" },
              { label: "Body Lotions", to: "all-personal-care/skin-care/all-body-lotions" },
              { label: "Face Wash", to: "all-personal-care/skin-care/all-face-wash" },
              { label: "Sunscreens", to: "all-personal-care/skin-care/all-sunscreens" },
              { label: "Cleansers", to: "all-personal-care/skin-care/all-cleansers" },
            ]
           },
           
           { label: "Adult Care", to: "all-personal-care/adult-care", element:<AdultCare/>,
            children: [
              { label: "Adult Diapers", to: "all-personal-care/adult-care/all-adult-diapers" },
              { label: "Adult Wipes", to: "all-personal-care/adult-care/all-adult-wipes" },
              { label: "Adult Rash Creams", to: "all-personal-care/adult-care/all-adult-rash-creams" },
              { label: "Adult Skin Care", to: "all-personal-care/adult-care/all-adult-skin-care" },
              { label: "Adult Hygiene", to: "all-personal-care/adult-care/all-adult-hygiene" },
              { label: "Adult Supplements", to: "all-personal-care/adult-care/all-adult-supplements" },
              { label: "Adult Pain Relief", to: "all-personal-care/adult-care/all-adult-pain-relief" },
              { label: "Adult Mobility Aids", to: "all-personal-care/adult-care/all-adult-mobility-aids" },
              { label: "Adult Health Monitors", to: "all-personal-care/adult-care/all-adult-health-monitors" },
              { label: "Orthopedic Supports", to: "all-personal-care/adult-care/all-orthopedic-supports" },
              { label: "Adult Eye Care", to: "all-personal-care/adult-care/all-adult-eye-care" },
              { label: "Adult Backterial Care", to: "all-personal-care/adult-care/all-adult-eye-care" },
              { label: "Mobility & Support Care", to: "all-personal-care/adult-care/all-mobility-and-support-care" },
            ]
           },

          { label: "Hair Care", to: "all-personal-care/hair-care", element:<HairCare/>,
            children: [
              { label: "Hair Oils", to: "all-personal-care/hair-care/all-hair-oils", element:<HairOils/> },
              { label: "Hair Shampoo", to: "all-personal-care/hair-care/all-hair-shampoo" },
              { label: "Hair Conditioners", to: "all-personal-care/hair-care/all-hair-conditioners" },
              { label: "Hair Serums", to: "all-personal-care/hair-care/all-hair-serums" },
              { label: "Hair Supplements", to: "all-personal-care/hair-care/all-hair-supplements" },
              { label: "Hair Colours", to: "all-personal-care/hair-care/all-hair-colours" },
              { label: "Hair Solutions", to: "all-personal-care/hair-care/all-hair-solutions" },
              { label: "Hair Masks", to: "all-personal-care/hair-care/all-hair-masks" },
            ]
           },
           
          { label: "Sexual Wellness", to: "all-personal-care/sexual-wellness", element:<SexualWellness/>,
            children: [
              { label: "Ayurvedas", to: "all-personal-care/sexual-wellness/all-ayurvedas" },
              { label: "Lubricants", to: "all-personal-care/sexual-wellness/all-lubricants" },
              { label: "Oils & Massage Oils", to: "all-personal-care/sexual-wellness/all-oils-and-massage" },
              { label: "Adult Toys", to: "all-personal-care/sexual-wellness/all-adult-toys" },
              { label: "Pregnancy & Fertility", to: "all-personal-care/sexual-wellness/all-pregnancy-and-fertility" },
              { label: "Personal Body Massage", to: "all-personal-care/sexual-wellness/personal-body-massage" },
              { label: "Condoms with Flavours", to: "all-personal-care/sexual-wellness/all-condoms-with-flavours" },
              { label: "Mens Performance Booster", to: "all-personal-care/sexual-wellness/all-mens-performance-booster" },
              { label: "Sexual Health Supplements", to: "all-personal-care/sexual-wellness/all-sexual-health-supplements" },
            ]
           },

          { label: "Oral Care", to: "all-personal-care/oral-care", element:<OralCare/>,
            children: [
              { label: "Tooth Paste", to: "all-personal-care/oral-care/all-toothpaste" },
              { label: "Tooth Brush", to: "all-personal-care/oral-care/all-toothbrush" },
              { label: "Mouth Wash", to: "all-personal-care/oral-care/all-mouthwash" },
              { label: "Mouth Ulcer Gel", to: "all-personal-care/oral-care/all-mouth-ulcer-gel" },
              { label: "Mouth Paint", to: "all-personal-care/oral-care/all-mouth-paint" },
              { label: "Teeth Whitening", to: "all-personal-care/oral-care/all-teeth-whitening" },
              { label: "Dental Floss", to: "all-personal-care/oral-care/all-dental-floss" },
              { label: "Kids Oral Care", to: "all-personal-care/oral-care/all-kids-oral-care" },
              { label: "Gargel Solution", to: "all-personal-care/oral-care/all-kids-gargel-solution" },
            ]
           },
        ],
  },

  { label: "Creams", to: "all-creams", element:<Cream/>,
    children: [
       
      { label: "Cosmetic Cream", to: "all-creams/cosmetic-cream", element:<CosmeticCream/>,
        children: [
          { label: "Fare & Lovely", to: "all-creams/cosmetic-cream/fare-and-lovely", element:<FairAndLovely/>},
          { label: "Scar Lyte", to: "all-creams/cosmetic-cream/scar-lyte" },
          { label: "Skin Lyte", to: "all-creams/cosmetic-cream/skin-lyte" },
        ],
      },
      
      { label: "Medicated Cream", to: "all-creams/medicated-cream", element:<MedicatedCream/>,
        children: [
          { label: "Betnovate", to: "all-creams/medicated-cream/betnovate" },
          { label: "T-bact", to: "all-creams/medicated-cream/t-bact" },
          { label: "Anovate", to: "all-creams/medicated-cream/anovate" },
          { label: "Acnestar", to: "all-creams/medicated-cream/acnestar" },
        ],
      },
    ],
  },

  { label: "Health Care", to: "all-health-care", element:<HealthCare/>,
        children: [
          { label: "Heart Care", to: "all-health-care/heart-care", element:<HeartCare/> }, 
          { label: "Digestive Care", to: "all-health-care/digestive-care", element:<DigestiveCare/>,
            children: [
              { label: "Pre & Probiotics", to: "all-health-care/digestive-care/pre-and-probiotics" },
              { label: "Laxatives", to: "all-health-care/digestive-care/laxatives" },
              { label: "Antacids", to: "all-health-care/digestive-care/antacids" },
              { label: "Anti-diarrheal", to: "all-health-care/digestive-care/anti-diarrheal" },
              { label: "Digestive Enzymes", to: "all-health-care/digestive-care/digestive-enzymes" },
              { label: "Digestive Fibres", to: "all-health-care/digestive-care/digestive-fibres" },
              { label: "Acidity", to: "all-health-care/digestive-care/acidity" },
              { label: "Gas", to: "all-health-care/digestive-care/gas" },
              { label: "Constipation", to: "all-health-care/digestive-care/constipation" },
              { label: "Stomach Pain", to: "all-health-care/digestive-care/stomach-pain" },
              { label: "Nausea & Vomiting", to: "all-health-care/digestive-care/nausea-and-vomiting" },
              { label: "Loose Motion & Diarrhoea", to: "all-health-care/digestive-care/loose-motion" },        
            ]
          },
          { label: "Kidney Care", to: "all-health-care/kidney-care", element:<KidneyCare/> },
          { label: "Liver Care", to: "all-health-care/liver-care", element:<LiverCare/> },
          { label: "Bone & Joint Care", to: "all-health-care/bone-and-joint-care", element:<BoneAndJointCare/> },
          { label: "Eye Care", to: "all-health-care/eye-care", element:<EyeCare/>,
            children: [
              { label: "Eye Lubricant Drops", to: "all-health-care/eye-care/eye-lubricant-drops" },
              { label: "Eye Cream", to: "all-health-care/eye-care/eye-cream" },
              { label: "Contact Lens Solutions", to: "all-health-care/eye-care/contact-lens-solutions" },
              { label: "Eye Vitamin & Suplements", to: "all-health-care/eye-care/eye-vitamin-supplements" },
              { label: "Eye Drops", to: "all-health-care/eye-care/eye-drops" },
              { label: "Eye Ointment & Gel", to: "all-health-care/eye-care/eye- ointment-and-gel" },
            ]
           },
          { label: "Piles, Fissure & Fistula", to: "all-health-care/piles-fissure-fistula", element:<PilesFissureAndFistula/> },
          { label: "Immunity Boosters", to: "all-health-care/immunity-boosters", element:<ImmunityBoosters/> },
          { label: "Weight Management", to: "all-health-care/weight-management", element:<WeightManagement/> },
          { label: "Respiratory Health", to: "all-health-care/respiratory-health", element:<RespiratoryHealth/> },
          { label: "Derma Care", to: "all-health-care/derma-care", element:<DermaCare/> },
          { label: "Mental Wellness", to: "all-health-care/mental-wellness", element:<MentalWellness/> },
          { label: "Pain Relief", to: "all-health-care/pain-relief", element:<PainRelief/> },
          { label: "First Aid Box", to: "all-health-care/first-aid", element:<FirstAidBox/> },
        ]
  },

      { label: "Vitamins & Supplements", to: "all-vitamins-and-supplements", element:<VitaminsAndSupplements/>,
        children: [
          { label: "Multivitamins", to: "all-vitamins-and-supplements/multivitamins", element:<MultiVitamins/> },
          { label: "Multiminerals", to: "all-vitamins-and-supplements/multiminerals", element:<MultiMinerals/> },
          { label: "Antioxidants", to: "all-vitamins-and-supplements/antioxidants", element:<Antioxidants/> },
          { label: "Calcium & Minerals", to: "all-vitamins-and-supplements/calcium-and-minerals", element:<CalciumAndMinerals/> },
          { label: "Vitamin A to Z", to: "all-vitamins-and-supplements/itamin-a-to-z", element:<VitaminsAtoZ/> },
          { label: "Protein Supplements", to: "all-vitamins-and-supplements/protein-supplements", element:<ProteinSupplements/> },
          { label: "Supplement Powders", to: "all-vitamins-and-supplements/supplement-powders", element:<SupplementProwders/> },
          { label: "Mineral Supplements", to: "all-vitamins-and-supplements/mineral-supplements", element:<MineralSupplements/> },
          { label: "Omega & Fish Oil", to: "all-vitamins-and-supplements/omega-and-fish-oil", element:<Omega3AndFishOil/> },
        ]
        },
  
      { label: "Diabetes Care", to: "all-diabetes-care", element:<DiabetesCare/>,
        children: [
          { label: "Test Strip & Lancets", to: "all-diabetes-care/taste-strip-and-lancets", element:<TestStripsAndLancets/> },
          { label: "Diabetic Supplements", to: "all-diabetes-care/diabetic-supplements", element:<DiabeticSupplements/> },
          { label: "Diabetic Skin Care", to: "all-diabetes-care/diabetic-skin-care", element:<DiabeticSkinCare/> },
          { label: "Blood Glucose Monitors", to: "all-diabetes-care/blood-glucose-monitors", element:<BloodGlucoseMonitors/> },
          { label: "Diabetic Foods", to: "all-diabetes-care/diabetic-foods", element:<DiabeticFoods/> },
          { label: "Sugar Substitutes", to: "all-diabetes-care/sugar-substitutes", element:<SugarSubstitutes/> },
          { label: "Diabetic Accessories", to: "all-diabetes-care/diabetic-accessories", element:<DiabeticAccessories/> },
          { label: "Diabetic Test Kits", to: "all-diabetes-care/diabetic-test-kits", element:<DiabeticTestKits/> },
          { label: "Diabetic Medicines", to: "all-diabetes-care/diabetic-medicines", element:<DiabeticMedicines/> },
          { label: "Diabetes Ayurvedic Medicines", to: "all-diabetes-care/diabetes-ayurvedic-medicines", element:<DiabetesAyurvedicMedicines/> },
          { label: "Diabetes Homeopathic Medicines", to: "all-diabetes-care/diabetes-homeopathic-medicines", element:<DiabetesHomeopathicMedicines/> },
          { label: "Diabetes Herbal Medicines", to: "all-diabetes-care/diabetes-herbal-medicines", element:<DiabetesHerbalMedicines/> },
          { label: "Syrings & Pens", to: "all-diabetes-care/syrings-and-pens", element:<SyringsAndPens/> },
        ]
       },

  { label: "Health Devices", to: "all-health-devices",element:<HealthDevices/>,
    children: [
      { label: "Thermometer", to: "all-health-devices/thermometer", element:<Thermometer/> },
      { label: "Blood Pressure Monitors", to: "all-health-devices/blood-pressure-monitors", element:<BloodPressureMonitors/> },
      { label: "Pulse Oximeters", to: "all-health-devices/pulse-oximeters", element:<PulseOximeters/> },
      { label: "Weighting Scales", to: "all-health-devices/Weighting-scales", element:<WeightingScales/> },
      { label: "Nebulizers & Vapourizers", to: "all-health-devices/nebulizers", element:<NebulizersAndVapourizers/> },
      { label: "Glucometers", to: "all-health-devices/glucometers", element:<Glucometers/> },
      { label: "First Aid Devices", to: "all-health-devices/first-aid-devices", element:<FirstAidDevices/> },
      { label: "Inhalers", to: "all-health-devices/inhalers", element:<Inhalers/> },
      { label: "Massagers", to: "all-health-devices/massagers", element:<Massagers/> },
      { label: "Oximeters", to: "all-health-devices/oximeters", element:<Oximeters/> },
      { label: "TENS Units", to: "all-health-devices/tens-units", element:<TensUnit/> },
      { label: "Supports & Braces", to: "all-health-devices/supports-and-braces", element: <SupportBraces/> },
    ]
  },
  {
    label:"Get in Touch", to:'#', element:<Outlet/>,
    children:[
      {label:'About Us', to:'get-in-touch/about-us', element: <About/>},
      {label:'Contact Us', to:'get-in-touch/contact-us', element: <Contact/>}
    ]
  }
       
];