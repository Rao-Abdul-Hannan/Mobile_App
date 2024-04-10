const handleScroll = (event, setUpperFlex, setParagraphVisible) => {
    const { contentOffset, contentSize, layoutMeasurement } = event.nativeEvent;
    const scrollY = contentOffset.y;
    // console.log(scrollY) // 130
    const scrollHeight = contentSize.height;
    // console.log(scrollHeight) // 3094
    const screenHeight = layoutMeasurement.height;
    // console.log(screenHeight) // 400
    const maxScroll = scrollHeight - screenHeight;
    // console.log(maxScroll) // 2700
    const scrollFraction = maxScroll > 0 ? scrollY / maxScroll : 0;
    // console.log(scrollFraction) // 0.02 and decreasing when scroll up
    const newFlex = 1 - scrollFraction * 5; // Adjust the multiplier to control the rate of flex decrease
    setUpperFlex(newFlex < 0.15 ? 0.15 : newFlex); // Ensure upperFlex does not go below 0.25
    setParagraphVisible(scrollY <= 0); // Hide paragraph content when scrolling up
};

export default handleScroll