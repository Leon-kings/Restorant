/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import React, { useState } from "react";
import { about } from "../../assets/data/data";
import { Button, Card } from "@mui/material";
import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const response = await fetch("https://your-api-endpoint.com/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error("Failed to subscribe");
      }

      const result = await response.json();
      setSuccess(true);
      setEmail("");
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      {" "}
      <div className="w-full bg-white text-black rounded-2xl pt-20 pb-20">
        <div className="container mx-auto px-4">
          <div className="row flex flex-wrap items-center">
            <div className="col-lg-6 w-full lg:w-1/2">
              <motion.div
                className="subscribe_title mt-8"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h4 className="title text-2xl font-bold">
                  Subscribe Our Newsletter
                </h4>
                <p className="text-gray-400">To receive monthly updates</p>
              </motion.div>
            </div>
            <div className="col-lg-6 w-full lg:w-1/2">
              <motion.div
                className="subscribe_form mt-8"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <form
                  onSubmit={handleSubmit}
                  className="flex text-black border-black bg-gray-500"
                >
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-gray-900"
                    required
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="px-6 py-3 dark:bg-blue-400 dark:text-white text-white rounded-r-lg  transition-colors duration-300"
                  >
                    {loading ? "Sending..." : "Subscribe"}
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_widget pt-20 pb-20">
        <div className="container mx-auto px-4">
          <div className="row flex flex-wrap">
            {/* About Us */}
            <div className="col-lg-4 col-md-4 w-full lg:w-1/3">
              <motion.div
                className="footer_about mt-8"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h4 className="footer_title text-xl font-bold mb-4">
                  About Us
                </h4>
                <motion.span
                  className="line block w-16 h-1 bg-orange-500 mx-auto mt-4 relative"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  <motion.span
                    className="box absolute w-2 h-2 bg-orange-500 rounded-full -top-1 -left-1"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  ></motion.span>
                </motion.span>
                <p className="text-gray-400 pt-4">
                  By drinking this coffee, you are investing in women farmers as
                  they produce high quality products that increase economic
                  independence for themselves and their families.
                </p>
                <ul className="social flex mt-4 space-x-4">
                  <li>
                    <Button
                      href="#"
                      className="text-gray-400 hover:text-yellow-500"
                    >
                      <Facebook className="size-6" />
                    </Button>
                  </li>
                  <li>
                    <Button
                      href="#"
                      className="text-gray-400 hover:text-yellow-500"
                    >
                      <Twitter className="size-6" />
                    </Button>
                  </li>
                  <li>
                    <Button
                      href="#"
                      className="text-gray-400 hover:text-yellow-500"
                    >
                      <Instagram className="size-6" />
                    </Button>
                  </li>
                  <li>
                    <Button
                      href="#"
                      className="text-gray-400 hover:text-yellow-500"
                    >
                      <LinkedIn className="size-6" />
                    </Button>
                  </li>
                </ul>
              </motion.div>
            </div>

            {/* Opening Hours */}
            <div className="col-lg-4 w-full lg:w-1/3">
              <motion.div
                className="footer_link mt-8"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <h4 className="footer_title text-xl font-bold mb-4">
                  Opening Hours
                </h4>
                <motion.span
                  className="line block w-16 h-1 bg-orange-500 mx-auto mt-4 relative"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  <motion.span
                    className="box absolute w-2 h-2 bg-orange-500 rounded-full -top-1 -left-1"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  ></motion.span>
                </motion.span>
                <ul className="text-gray-400 pt-4">
                  <li>
                    Mon-Fri: <b> 08.00 A.M - 10.00 P.M</b>
                  </li>
                  <li>
                    Saturday: <b> 08.00 A.M - 02.00 P.M</b>
                  </li>
                  <li>
                    Sunday: <b> Closed</b>
                  </li>
                  <li>
                    Half-Holidays: <b> 08.00 A.M - 02.00 P.M</b>
                  </li>
                </ul>
              </motion.div>
            </div>

            {/* Instagram Feed */}
            <div className="col-lg-4 col-md-4 w-full lg:w-1/3">
              <motion.div
                className="footer_instagram mt-8"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <h4 className="footer_title text-xl font-bold mb-4">
                  Instagram Feed
                </h4>
                <motion.span
                  className="line block w-16 h-1 bg-orange-500 mx-auto mt-4 relative"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  <motion.span
                    className="box absolute w-2 h-2 bg-orange-500 rounded-full -top-1 -left-1"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  ></motion.span>
                </motion.span>
                <div className="grid grid-cols-4 gap-2 pt-4">
                  {about.map((image) => (
                    <Card key={image.id}>
                      <img
                        src={image.url}
                        alt=""
                        className="w-full h-24 object-cover rounded-lg"
                      />
                    </Card>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
