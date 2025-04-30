#!/bin/bash

# S3 bucket name
BUCKET_NAME=strokeshield

# AWS region
AWS_REGION=us-east-1

# Build your app
pnpm run build

# Sync to S3 bucket
echo "🚀 Uploading to s3://$BUCKET_NAME/..."
aws s3 sync build/ s3://$BUCKET_NAME/ --delete --region $AWS_REGION

echo "✅ Deployed to https://$BUCKET_NAME.s3-website-$AWS_REGION.amazonaws.com"