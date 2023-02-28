export const handleClickEventOnLogo = (isHomePage, thisObj) => {
  isHomePage = true;
  thisObj.setState({
    isHomePage,
  });
};
