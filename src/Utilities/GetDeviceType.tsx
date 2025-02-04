import { useState, useEffect } from 'react';

const useDeviceType = () =>
{
	const [deviceType, setDeviceType] = useState({
		isMobile: false,
		isTablet: false,
		isDesktop: false
	});

	useEffect(() =>
	{
		// Function to check device type
		const checkDeviceType = () =>
		{
			// Check if user agent indicates mobile device
			const userAgent = navigator.userAgent.toLowerCase();
			const mobileKeywords = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i;
			const isMobileAgent = mobileKeywords.test(userAgent);

			// Get screen width
			const width = window.innerWidth;

			setDeviceType({
				isMobile: width < 768 || (isMobileAgent && width < 1024),
				isTablet: (width >= 768 && width < 1024) && !isMobileAgent,
				isDesktop: width >= 1024 && !isMobileAgent
			});
		};

		// Initial check
		checkDeviceType();

		// Add event listener for window resize
		window.addEventListener('resize', checkDeviceType);

		// Cleanup
		return () => window.removeEventListener('resize', checkDeviceType);
	}, []);

	return deviceType;
};

export default useDeviceType;