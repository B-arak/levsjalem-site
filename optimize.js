/**
 * Claude Code Instructions File
 * Project: www.levshalem.net Optimization (שלם מלב שבור)
 * Objective: Increase conversion rates for physical book sales and lead generation.
 * Author/Target Persona: Freshly divorced individuals seeking emotional first-aid.
 */

module.exports = {
  projectDetails: {
    siteName: "שלם מלב שבור",
    product: "מדריך רגשי לגרושים טריים (עותק פיזי)",
    primaryGoal: "Maximize book sales and build an email list of engaged readers",
    toneOfVoice: "Empathetic, authoritative, comforting, yet action-oriented"
  },

  tasks: {
    textAndCopywriting: {
      instruction: "Analyze and rewrite website copy to be more conversion-focused.",
      actionItems: [
        {
          target: "Hero Section (דף הבית)",
          directive: "צור כותרת ראשית (H1) שפונה ישר לכאב של הלקוח ומשדרת פתרון מיידי. במקום תיאור כללי, השתמש בנוסח כמו: 'עזרה ראשונה לנפש: המדריך המעשי שיעזור לך לחזור לשלוט בחיים אחרי הגירושין'."
        },
        {
          target: "Call to Action (CTA)",
          directive: "שנה כפתורים גנריים (כמו 'Shop' או 'קנה עכשיו') לכפתורים מניעי פעולה מוכווני תועלת, למשל: 'שלחו לי את המדריך עכשיו' או 'אני רוצה להתחיל פרק חדש'."
        },
        {
          target: "About the Author (אודות)",
          directive: "נסח מחדש את עמוד האודות על ברק יקותיאל כך שיבנה סמכות (Authority) ואמון. הדגש את הניסיון, ההבנה העמוקה של הסיטואציה הרגשית, והסיבה לכתיבת הספר."
        }
      ]
    },

    strategicIdeas: {
      instruction: "Implement new marketing mechanics to capture users who aren't ready to buy immediately.",
      actionItems: [
        {
          concept: "Lead Magnet (מגנט לידים)",
          directive: "הוסף פופ-אפ או סקשן בדף הבית המציע 'עזרה ראשונה חינם' – למשל, שליחת הפרק הראשון של הספר או '5 הטיפים לצליחת השבוע הראשון' בתמורה לכתובת אימייל. זה ייצור רשימת תפוצה להמשך שיווק (Retargeting)."
        },
        {
          concept: "Social Proof (הוכחה חברתית)",
          directive: "צור מנגנון (קרוסלה או גריד) המציג המלצות אותנטיות (Testimonials) של קוראים שקראו את הספר והרגישו הקלה. הוכחה חברתית קריטית להמרות בנישה רגשית."
        },
        {
          concept: "Upsells / Bundles (הצעות ערך נוספות)",
          directive: "הצע חבילות בעמוד התשלום. לדוגמה: ספר פיזי + חוברת עבודה דיגיטלית להורדה מיידית, או ספר מודפס + גישה לקהילה סגורה/שיחת ייעוץ."
        }
      ]
    },

    visibilityAndUI: {
      instruction: "Refactor the UI structure for a frictionless user journey.",
      actionItems: [
        {
          element: "Navigation Menu (תפריט עליון)",
          directive: "נקה את התפריט. הסר כפילויות (כמו פעמיים 'Shop' או לינקים פנימיים לא ברורים כמו 'Landing Page' / 'general-8-1'). השאר רק: דף הבית | על הספר | בלוג וטיפים | יצירת קשר | רכישת הספר."
        },
        {
          element: "Visual Assets (נכסים ויזואליים)",
          directive: "הנחה להחליף קבצים גנריים (כמו 'מוקאפ ספר.jpeg') בתמונות תלת-מימד (3D Mockups) מקצועיות של הספר, עדיף בסביבה טבעית (על שולחן קפה עם ספל, למשל) כדי לשדר איכות גבוהה."
        },
        {
          element: "Mobile Responsiveness",
          directive: "בדוק וייעל את תהליך הרכישה במובייל (Mobile Checkout). קהל במצוקה רגשית גולש לרוב מהנייד בשעות מאוחרות. ודא שטופס הרכישה ('שם, כתובת, טלפון') קצר, ברור, ומכיל סמלי אבטחה (Secure Checkout) להגברת אמון."
        }
      ]
    }
  },

  executionPromptForClaude: `
    As an expert web developer and CRO (Conversion Rate Optimization) specialist, 
    please read the tasks above. Start by proposing the updated HTML/CSS structure 
    for the Hero section and the Navigation Menu based on the instructions. 
    Then, provide the exact Hebrew copy you suggest for the new Lead Magnet.
  `
};