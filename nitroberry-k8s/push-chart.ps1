# Push Nitroberry Helm Chart to AWS ECR (OCI)
$AWS_ACCOUNT_ID = "798701233691"
$REGION = "ap-south-1"
$CHART_NAME = "nitroberry"
$CHART_PATH = "kubernetes_nitroberry/charts/nitroberry"

# 1. Read version from Chart.yaml
$CHART_VERSION = (Get-Content "$CHART_PATH/Chart.yaml" | Select-String "version:").ToString().Split(":")[1].Trim()

# 2. Login to ECR for Helm
Write-Host "Logging into ECR..."
aws ecr get-login-password --region $REGION | helm registry login --username AWS --password-stdin "$AWS_ACCOUNT_ID.dkr.ecr.$REGION.amazonaws.com"

# 3. Package the chart
Write-Host "Packaging chart version $CHART_VERSION..."
$currentDir = Get-Location
Set-Location $CHART_PATH
helm package .
Set-Location $currentDir

# 4. Push to ECR
Write-Host "Pushing to ECR..."
helm push "$CHART_PATH/$CHART_NAME-$CHART_VERSION.tgz" "oci://$AWS_ACCOUNT_ID.dkr.ecr.$REGION.amazonaws.com/"

Write-Host "Done!"
