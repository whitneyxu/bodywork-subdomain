#!/bin/bash

# Create HTML files with iframe embeds for the new TidyCal URLs

# 30 minute cupping session with reiki
cat > book-cupping-30.html << 'EOF'
<html>
	<head>
		<title>30 min cupping session with reiki - Gentle Tiger Bodywork</title>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
		<link rel="stylesheet" href="assets/css/main.css" />
		<noscript><link rel="stylesheet" href="assets/css/noscript.css" /></noscript>

		<link rel="apple-touch-icon" sizes="180x180" href="favicon_io/apple-touch-icon.png">
		<link rel="icon" type="image/png" sizes="32x32" href="favicon_io/favicon-32x32.png">
		<link rel="icon" type="image/png" sizes="16x16" href="favicon_io/favicon-16x16.png">
		<link rel="manifest" href="favicon_io/site.webmanifest">
		
	</head>
	<body>
		
		<div>
		<iframe src="https://tidycal.com/gentletigerbodywork/30-minute-cupping" title="Gentle Tiger Bodywork Booking" width=100% height=100%></iframe>
		</div>

	</body>
</html>
EOF

# 60 minutes chakra balancing with massage
cat > book-chakra-60.html << 'EOF'
<html>
	<head>
		<title>60 min chakra balancing with massage - Gentle Tiger Bodywork</title>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
		<link rel="stylesheet" href="assets/css/main.css" />
		<noscript><link rel="stylesheet" href="assets/css/noscript.css" /></noscript>

		<link rel="apple-touch-icon" sizes="180x180" href="favicon_io/apple-touch-icon.png">
		<link rel="icon" type="image/png" sizes="32x32" href="favicon_io/favicon-32x32.png">
		<link rel="icon" type="image/png" sizes="16x16" href="favicon_io/favicon-16x16.png">
		<link rel="manifest" href="favicon_io/site.webmanifest">
		
	</head>
	<body>
		
		<div>
		<iframe src="https://tidycal.com/gentletigerbodywork/60-minute-chakra" title="Gentle Tiger Bodywork Booking" width=100% height=100%></iframe>
		</div>

	</body>
</html>
EOF

# 60 minutes TheraGun with trigger point release
cat > book-theragun-60.html << 'EOF'
<html>
	<head>
		<title>60 min TheraGun with trigger point release - Gentle Tiger Bodywork</title>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
		<link rel="stylesheet" href="assets/css/main.css" />
		<noscript><link rel="stylesheet" href="assets/css/noscript.css" /></noscript>

		<link rel="apple-touch-icon" sizes="180x180" href="favicon_io/apple-touch-icon.png">
		<link rel="icon" type="image/png" sizes="32x32" href="favicon_io/favicon-32x32.png">
		<link rel="icon" type="image/png" sizes="16x16" href="favicon_io/favicon-16x16.png">
		<link rel="manifest" href="favicon_io/site.webmanifest">
		
	</head>
	<body>
		
		<div>
		<iframe src="https://tidycal.com/gentletigerbodywork/60-minute-theragun" title="Gentle Tiger Bodywork Booking" width=100% height=100%></iframe>
		</div>

	</body>
</html>
EOF

# 90 minutes TheraGun with trigger point release
cat > book-theragun-90.html << 'EOF'
<html>
	<head>
		<title>90 min TheraGun with trigger point release - Gentle Tiger Bodywork</title>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
		<link rel="stylesheet" href="assets/css/main.css" />
		<noscript><link rel="stylesheet" href="assets/css/noscript.css" /></noscript>

		<link rel="apple-touch-icon" sizes="180x180" href="favicon_io/apple-touch-icon.png">
		<link rel="icon" type="image/png" sizes="32x32" href="favicon_io/favicon-32x32.png">
		<link rel="icon" type="image/png" sizes="16x16" href="favicon_io/favicon-16x16.png">
		<link rel="manifest" href="favicon_io/site.webmanifest">
		
	</head>
	<body>
		
		<div>
		<iframe src="https://tidycal.com/gentletigerbodywork/90-minute-theragun" title="Gentle Tiger Bodywork Booking" width=100% height=100%></iframe>
		</div>

	</body>
</html>
EOF

echo "HTML files created successfully!"