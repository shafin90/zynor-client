import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home/Home';
import Services from './pages/Services/Services';
import OurWork from './pages/OurWork/OurWork/OurWork';
import OurBlog from './pages/OurBlog/OurBlog';
import ContactUs from './pages/ContactUs/ContactUs';
import Blog1 from './pages/Blog1/Blog1';
import ViewProject from './pages/ViewProject/ViewProject';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/services",
        element: <Services></Services>
      },
      {
        path: "/ourWork",
        element: <OurWork></OurWork>
      },
      {
        path: "/ourBlog",
        element: <OurBlog></OurBlog>
      },
      {
        path: "/contactUs",
        element: <ContactUs></ContactUs>
      },
      {
        path: "/blog1",
        element: <Blog1
          img="/public/assets/Rectangle 13.jpg"
          heading="Set Free the Power of Digital Marketing: Your Gateway to Online Success"
          firstArticle="In the dynamic landscape of today's business world, establishing a robust online presence is not just an option—it's a necessity. As the digital realm continues to evolve, businesses must leverage innovative strategies to stay ahead of the competition. That's where we, at [ZYNORE], step in to guide you on an exciting journey toward digital excellence."
          secondArticle={false}
          thirdArticle={false}
          listFirstHeading={false}
          listFirstArticle={false}
          list1={false}
          list2={false}
          list3={false}
          list4={false}
          list5={false}
          listSecondHeading={false}
          listSecondArticle={false}
          list6={false}
          list7={false}
          list8={false}
          list9={false}
          list10={false}
        ></Blog1>
      },
      {
        path: "/blog2",
        element: <Blog1
          img="/public/assets/Rectangle 12.jpg"
          heading="Social Media Marketing : Building Your Brand Online"
          firstArticle="Building your brand online through social media is a journey of strategic choices, compelling content, and data-driven refinement. As you navigate this landscape, remember that social media is more than a promotional tool – it's a dynamic space for building relationships and fostering genuine connections. Embrace the uniqueness of each platform, stay authentic in your messaging, and watch as your brand becomes a beacon in the digital realm. Social media marketing isn't just about visibility; it's about creating a lasting impression that resonates with your audience. #BrandSuccess #SocialMediaJourneyComplete"
          secondArticle="Content is the heart of social media, and creating posts that captivate your audience is the secret sauce. Infuse your content with personality, share behind-the-scenes moments, highlight your team, and showcase the values that make your brand unique. Visuals matter, so invest time in creating eye-catching graphics, videos, and images that stop the scroll. Remember, consistency is key; maintain a regular posting schedule to keep your audience engaged."
          thirdArticle={false}
          listFirstHeading={false}
          listFirstArticle={false}
          list1={false}
          list2={false}
          list3={false}
          list4={false}
          list5={false}
          listSecondHeading={false}
          listSecondArticle={false}
          list6={false}
          list7={false}
          list8={false}
          list9={false}
          list10={false}
        ></Blog1>
      },
      {
        path: "/blog3",
        element: <Blog1
          img="/public/assets/Rectangle 14.jpg"
          heading="Email Marketing: Building and Nurturing Your Online Community"
          firstArticle="Your email list is the foundation of your online community. Encourage website visitors, social media followers, and customers to join your mailing list. Offer incentives like exclusive content, discounts, or early access to products. Make it easy for them to subscribe, ensuring a seamless experience."
          secondArticle="As we wrap up this exploration of email marketing, remember that your emails are more than just messages—they are invitations to connect, engage, and build a community around your brand. By cultivating your email list, personalising your messages, and measuring campaign success, you're not just sending emails; you're fostering relationships that last. Cheers to building and nurturing your online community through the power of email marketing!  #EmailMagic #CommunityBuildingSuccess"
          thirdArticle={false}
          listFirstHeading={false}
          listFirstArticle={false}
          list1={false}
          list2={false}
          list3={false}
          list4={false}
          list5={false}
          listSecondHeading={false}
          listSecondArticle={false}
          list6={false}
          list7={false}
          list8={false}
          list9={false}
          list10={false}
        ></Blog1>
      },

      {
        path: "/blog4",
        element: <Blog1
          img="/public/assets/Rectangle 16.jpg"
          heading="Content Marketing Mastery: Creating Value that Drives Results"
          firstArticle="Content marketing is the art of creating and sharing valuable, relevant, and consistent content to attract and retain a clearly defined audience – and, ultimately, to drive profitable customer action. This blog post will guide you through the process of crafting content that resonates with your target audience, establishing your brand as a thought leader in your industry."
          secondArticle="As we conclude this exploration of Content Marketing Mastery, remember that every piece of content you create is an opportunity to add value, connect with your audience, and drive tangible results. By understanding your audience, creating evergreen content, and expolit the power of visuals, you're not just producing content; you're crafting an experience that leaves a lasting impression. Here's to mastering the art of content creation and driving results that elevate your brand in the digital sphere!  #ContentMastery #ResultsDrivenContent"
          thirdArticle={false}
          listFirstHeading={false}
          listFirstArticle={false}
          list1={false}
          list2={false}
          list3={false}
          list4={false}
          list5={false}
          listSecondHeading={false}
          listSecondArticle={false}
          list6={false}
          list7={false}
          list8={false}
          list9={false}
          list10={false}
        ></Blog1>
      },
      {
        path: "/blog5",
        element: <Blog1
          img="/public/assets/Rectangle 15.jpg"
          heading="Evolving Customer Experience: Personalization and Engagement in the Digital Age"
          firstArticle="In today's digitally driven world, customer expectations have reached an all-time high. Customers demand more than just products or services; they seek personalised experiences that serve their unique needs and preferences. This shift in customer etiquette  has forced businesses to rethink their approach to customer experience  and adopt strategies that foster deeper engagement and loyalty."
          thirdArticle={false}
          listFirstHeading="The Role of Engagement"
          listFirstArticle="Engagement is another critical aspect of delivering an outstanding customer experience. It involves creating meaningful connections with customers and fostering ongoing interactions. This can be achieved through various channels."
          list1="Interactive Content"
          list2="Community Building"
          list3="Customer Feedback Mechanisms"
          list4="Omnichannel Communication"
          list5={false}
          listSecondHeading="The Impact of Technology"
          listSecondArticle="Technological advancements have revolutionised the way businesses interact with their customers. Data analytics, artificial intelligence (AI), and machine learning (ML) are playing a pivotal role in personalising and engaging customers at scale."
          list6="Data Analytics"
          list7="AI and ML"
          list8="Chatbots and Virtual Assistants"
          list9={false}
          list10={false}
        ></Blog1>
      },
      {
        path: "/blog6",
        element: <Blog1
          img="/public/assets/Rectangle 17.jpg"
          heading="How to Create a Killer SEO Strategy"
          firstArticle="Search engine optimization (SEO) is one of the most important digital marketing strategies for small businesses. This blog post will teach you how to create a killer SEO strategy that will help your website rank higher in search engine results pages (SERPs). It will cover topics such as keyword research, on-page optimization, and link building."
          thirdArticle={false}
          listFirstHeading={false}
          listFirstArticle={false}
          list1="SEO is one of the most important digital marketing strategies for small businesses."
          list2="A killer SEO strategy will help your website rank higher in SERPs."
          list3="Keyword research, on-page optimization, and link building are essential components of a successful SEO strategy."
          list4={false}
          list5={false}
          listSecondHeading={false}
          listSecondArticle={false}
          list6={false}
          list7={false}
          list8={false}
          list9={false}
          list10={false}
        ></Blog1>
      },
      {
        path: "/blog7",
        element: <Blog1
          img="/public/assets/Rectangle 13 (1).jpg"
          heading="Navigating the Social Media Landscape: A Digital Marketing Guide"
          firstArticle={false}
          thirdArticle={false}
          listFirstHeading={false}
          listFirstArticle="Social media has become an indispensable part of the digital marketing toolkit. This blog serves as a comprehensive guide to navigating the dynamic landscape of social media, offering insights into crafting impactful strategies for brand growth."
          list1="Choosing the Right Platforms"
          list2="Crafting Engaging Content"
          list3="Analytics and Optimization"
          list4={false}
          list5={false}
          listSecondHeading={false}
          listSecondArticle="In the fast-paced world of social media, a strategic approach is key. By understanding the nuances of each platform and crafting engaging content, businesses can leverage social media as a powerful tool for brand building."
          list6={false}
          list7={false}
          list8={false}
          list9={false}
          list10={false}
        ></Blog1>
      },
      {
        path: "/blog8",
        element: <Blog1
          img="/public/assets/Rectangle 12 (1).jpg"
          heading="Embracing Micro-Influencers: Leveraging Authenticity and Niche Communities for Targeted Marketing"
          firstArticle="Micro-influencers, with their smaller but highly engaged follower bases, are gaining traction in the influencer marketing space. This blog post will discuss the benefits of collaborating with micro-influencers, highlighting their potential for targeted marketing campaigns that reach niche communities and drive authentic engagement."
          secondArticle="Unlike traditional influencers with millions of followers, micro-influencers cultivate a loyal following within specific communities, fostering genuine connections and establishing themselves as trusted voices. This authenticity and expertise resonate deeply with their followers, making micro-influencers effective advocates for brands seeking to reach a specific audience."
          listFirstHeading="The Power of Micro-Influencers"
          listFirstArticle={false}
          list1="Authenticity and Relatability"
          list2="Niche Expertise"
          list3="Targeted Reach:"
          list4="Engagement and Interaction"
          list5={false}
          listSecondHeading="Leveraging Micro-Influencers Effectively"
          listSecondArticle={false}
          list6="Identify Relevant Micro-Influencers"
          list7="Establish Clear Goals and Objectives"
          list8="Foster Authentic Relationships"
          list9="Measure and Analyze Results"
          list10={false}
          thirdHeading="Embracing Micro-Influencers for Success"
          thirdArticle="By embracing micro-influencers and leveraging their unique strengths, businesses can achieve targeted marketing success, reaching niche audiences and building authentic connections that drive brand loyalty and conversions. In the ever-evolving digital landscape, micro-influencers are poised to play an increasingly significant role in shaping effective marketing strategies."
        ></Blog1>
      },
      {
        path: "/blog9",
        element: <Blog1
          img="/public/assets/Rectangle 14 (1).jpg"
          heading="The Future is Exciting: Embracing the Evolution of Digital Marketing"
          firstArticle={false}
          secondArticle={false}
          listFirstHeading={false}
          listFirstArticle="The future of digital marketing holds immense promise for businesses that embrace innovation and flexibility. By leveraging emerging technologies, understanding evolving consumer behaviours, and prioritising data privacy, businesses can enhance customer engagement, drive growth, and achieve their marketing goals. As we step into the unfamiliar territories of the future, digital marketing remains an ever-evolving scenery , filled with opportunities for those who are willing to adapt and innovate."
          list1="Artificial Intelligence (AI) and Machine Learning (ML)"
          list2="Voice Search and Conversational Interfaces"
          list3="Augmented Reality (AR) and Virtual Reality (VR)"
          list4="The Rise of Micro-Influencers"
          list5="Data-Driven Marketing and Predictive Analytics"
          listSecondHeading={false}
          listSecondArticle={false}
          list6={false}
          list7={false}
          list8={false}
          list9={false}
          list10={false}
          thirdHeading={false}
          thirdArticle={false}
        ></Blog1>
      },
      {
        path: "/project1",
        element: <ViewProject
          img="/public/assets/Image.jpg"
          firstHeading="The Challenge"
          firstArticle="Rajesh Hospital, a multi-specialty hospital in Mumbai, struggled with an outdated website and minimal online engagement."

          SecondHeading="The Solution"
          SecondArticle="Our agency revamped their website with a patient-friendly interface, implemented an SEO and content marketing strategy."

          ThirdHeading="The Result"
          ThirdArticle="40% increase in website traffic and a 25% rise in online appointment bookings within six months."
        ></ViewProject>
      },
      {
        path: "/project2",
        element: <ViewProject
          img="/public/assets/Image (2).jpg"
          firstHeading="The Challenge"
          firstArticle="Rajesh Hospital, a multi-specialty hospital in Mumbai, struggled with an outdated website and minimal online engagement."

          SecondHeading="The Solution"
          SecondArticle="Our agency revamped their website with a patient-friendly interface, implemented an SEO and content marketing strategy."

          ThirdHeading="The Result"
          ThirdArticle="40% increase in website traffic and a 25% rise in online appointment bookings within six months."

          quality={true}
        ></ViewProject>
      },
      {
        path: "/project3",
        element: <ViewProject
          img="/public/assets/Image (1).jpg"
          firstHeading="The Challenge"
          firstArticle="Rajesh Hospital, a multi-specialty hospital in Mumbai, struggled with an outdated website and minimal online engagement."

          SecondHeading="The Solution"
          SecondArticle="Our agency revamped their website with a patient-friendly interface, implemented an SEO and content marketing strategy."

          ThirdHeading="The Result"
          ThirdArticle="40% increase in website traffic and a 25% rise in online appointment bookings within six months."
        ></ViewProject>
      },

      {
        path: "/project4",
        element: <ViewProject
          img="/public/assets/Rectangle 2.jpg"
          firstHeading="The Challenge"
          firstArticle="Rajesh Hospital, a multi-specialty hospital in Mumbai, struggled with an outdated website and minimal online engagement."

          SecondHeading="The Solution"
          SecondArticle="Our agency revamped their website with a patient-friendly interface, implemented an SEO and content marketing strategy."

          ThirdHeading="The Result"
          ThirdArticle="40% increase in website traffic and a 25% rise in online appointment bookings within six months."
        ></ViewProject>
      }

    ]
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);