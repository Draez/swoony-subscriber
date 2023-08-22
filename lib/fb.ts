export const facebookPixelId = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID!;
console.log(facebookPixelId)
export const trackFbPageView = async () => {
  const { default: ReactPixel } = await import("react-facebook-pixel");
  ReactPixel.init(facebookPixelId);
  ReactPixel.pageView();
};

export const trackLead = async (data: { email: string }) => {
  const { default: ReactPixel } = await import("react-facebook-pixel");
  ReactPixel.init(facebookPixelId);
  ReactPixel.track("Lead", data);
};
