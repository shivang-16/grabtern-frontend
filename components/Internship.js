import React from "react";
import Image from "next/image";

function Internship({
  internshipImage,
  internshipImageAlt,
  internshipCategories,
  internshipTitle,
  internshipDescription,
  internshipRating,
  internshipPayed,
  internshipPrice,
  internshipLink,
}) {
  const description =
    internshipDescription?.length > 120
      ? `${internshipDescription.substring(0, 120)}…`
      : internshipDescription;

  const handleInternshipLinkClick = (e) => {
    e.preventDefault();
    window.open(internshipLink, "_blank");
  };
  return (
    <div
      className="properties pb-20 item"
      style={{ minHeight: "469px !important" }}
    >
      <div className="properties__card">
        <div className="properties__img overlay1">
          <a href="#" onClick={handleInternshipLinkClick}>
            <Image
              width={360}
              height={219}
              src={internshipImage}
              alt={internshipImageAlt}
            />
          </a>
        </div>
        <div className="properties__caption">
          <div className="courseInfo">
            <p>{internshipCategories}</p>
            <h3>
              <a href={internshipLink} onClick={handleInternshipLinkClick}>
                {internshipTitle}
              </a>
            </h3>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Internship;
