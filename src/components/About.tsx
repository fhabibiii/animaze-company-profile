
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Target, Users, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const values = [
    {
      icon: Target,
      title: "Mission Driven",
      description: "We are committed to delivering solutions that make a real impact on your business growth and success."
    },
    {
      icon: Users,
      title: "Client Focused",
      description: "Your success is our priority. We work closely with you to understand and exceed your expectations."
    },
    {
      icon: Zap,
      title: "Innovation First",
      description: "We leverage the latest technologies and best practices to create cutting-edge digital solutions."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About TechFlow
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a forward-thinking technology company dedicated to creating innovative 
            digital solutions that empower businesses to thrive in the digital age.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold mb-6 text-gray-800">
              Transforming Ideas Into Reality
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Since our founding, we have been at the forefront of digital innovation, 
              helping businesses of all sizes achieve their goals through technology. 
              Our team of experts combines creativity with technical excellence to 
              deliver solutions that not only meet but exceed expectations.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We believe in the power of collaboration and work closely with our 
              clients to understand their unique challenges and create tailored 
              solutions that drive real results.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="w-full h-80 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl shadow-2xl">
              <div className="absolute inset-4 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-6xl font-bold mb-2">5+</div>
                  <div className="text-xl">Years of Innovation</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold mb-4 text-gray-800">{value.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
