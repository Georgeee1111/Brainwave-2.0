import PropTypes from "prop-types";

export const headerNavigationPropType = PropTypes.arrayOf(
  PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    onlyMobile: PropTypes.bool,
  })
).isRequired;

export const HomenavigationItems = [
  { id: 0, url: "#features", title: "Features" },
  { id: 1, url: "#how-to-use", title: "How to use" },
  { id: 2, url: "#pricing", title: "Pricing" },
  { id: 3, url: "#roadmap", title: "Roadmap" },
];
