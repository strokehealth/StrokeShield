#!/bin/bash

# Name of your bucket
BUCKET_NAME=react-stroke-prevention-app

# Region (adjust if you're not in us-east-1)
AWS_REGION=us-east-1

# Build your app (optional - comment this line out if you already built)
pnpm run build

# Deploy to S3
echo "Uploading to S3..."
aws s3 sync build/ s3://$BUCKET_NAME/ --delete --region $AWS_REGION

echo "✅ Deployed to https://$BUCKET_NAME.s3-website-$AWS_REGION.amazonaws.com"