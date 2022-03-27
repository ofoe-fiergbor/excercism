import Request from "./Request";

const ApiService = (() => {
  const trackResource = "/tracks";
  const testimonialResource = "/hiring/testimonials";

  return {
    getTracks: () => Request.get(trackResource),
    getTestimonials: (params) => Request.get(testimonialResource, params),
  };
})();

export default ApiService;
