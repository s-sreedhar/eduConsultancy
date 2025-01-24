import React from "react";

const Copyright = () => {
  return (
    <div className="container mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-900" style={{color:'#0F3A5E'}}>
        Copyright Policy
      </h1>
      <p className="text-gray-700 text-lg mb-4">
        Welcome to CS Overseas Consultancy ! This copyright policy outlines the
        terms under which the content on our website is protected and how it
        can be used.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4" style={{color:'#0F3A5E'}}>
          Ownership of Content
        </h2>
        <p className="text-gray-700 mb-4">
          All content, including but not limited to text, images, graphics,
          logos, videos, and other materials, available on this website is the
          exclusive property of [Your Consultancy Name] unless otherwise
          stated. This content is protected by applicable copyright laws and
          international treaties.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4" style={{color:'#0F3A5E'}}>
          Permitted Use
        </h2>
        <p className="text-gray-700 mb-4">
          You may access and use the content on our website for personal and
          non-commercial purposes. Any reproduction, distribution, modification,
          or use of the content for commercial purposes without prior written
          consent from CS Overseas Consultancy is strictly prohibited.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4" style={{color:'#0F3A5E'}}>
          Prohibited Actions
        </h2>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li>Copying or duplicating content without authorization.</li>
          <li>
            Republishing any part of our website or its content on external
            platforms without permission.
          </li>
          <li>
            Removing or altering copyright notices or proprietary labels on any
            content.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4" style={{color:'#0F3A5E'}}>
          Reporting Copyright Infringement
        </h2>
        <p className="text-gray-700 mb-4">
          If you believe that your copyrighted material has been used or
          displayed on our website without proper authorization, please contact
          us at{" "}
          <a
            href="mailto:info@yourconsultancy.com"
            className="text-blue-600 hover:underline"
          >
            csovereas@gmail.com
          </a>
          . Please provide the following details in your complaint:
        </p>
        <ul className="list-decimal pl-6 text-gray-700 space-y-2">
          <li>A description of the copyrighted material in question.</li>
          <li>
            Evidence or proof of your ownership of the material (e.g.,
            registration details or publication links).
          </li>
          <li>
            A detailed description of where the material appears on our
            website.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4" style={{color:'#0F3A5E'}}>
          Changes to This Policy
        </h2>
        <p className="text-gray-700 mb-4">
          We reserve the right to update this copyright policy at any time
          without prior notice. We encourage you to review this page
          periodically for any changes.
        </p>
      </section>

      <p className="text-gray-600 text-sm mt-6 text-center">
        &copy; {new Date().getFullYear()} CS Overseas Consultancy. All rights
        reserved.
      </p>
    </div>
  );
};

export default Copyright;
