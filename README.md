# Personal Website

Website at: [https://martvanburen.com](https://martvanburen.com).

Drone shots (background video) are taken by me.

## Testing Locally

Run `run_test_server.sh`:

```bash
./run_test_server.sh
```

This starts an Apache server in a Docker container, serving at `localhost:8080`.

## AWS Hosting

The production website is hosted on AWS S3, served with Amazon CloudFront, with DNS handled by Amazon Route 53.

To upload a new version:

```bash
aws s3 sync \
    --delete \
    --acl public-read \
    --exclude '*._*' \
    --exclude '*.DS_Store*' \
    public_html/ \
    s3://your-bucket-name

aws cloudfront create-invalidation \
    --paths "/*" \
    --distribution-id YOUR_DISTRIBUTION_ID
```

## Heartbeat Monitoring

To ensure website uptime, `heartbeat_monitor.py` runs regularly as a Synthetic Canary on AWS CloudWatch.
