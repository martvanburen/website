from aws_synthetics.selenium import synthetics_webdriver as webdriver
from aws_synthetics.common import synthetics_logger as logger
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC


def is_error_response_code(response_code):
    return (
        not response_code or
        type(response_code) != int or
        response_code < 200 or
        response_code > 299
    )

def main():
    # Config.
    url = "https://martvanburen.com"
    resume_url = "https://martvanburen.com/resume/Resume_MartVanBuren.pdf"
    takeScreenshot = True

    browser = webdriver.Chrome()
    browser.get(url)

    if takeScreenshot:
        browser.save_screenshot("loaded.png")

    # 1. Check home page is accessible.
    if is_error_response_code(webdriver.get_http_response(url)):
        raise Exception("Failed to load home page (index.html).")

    # 2. Check main content.
    WebDriverWait(browser, 10).until(EC.presence_of_element_located((By.TAG_NAME, 'body')))
    body_text = browser.find_element(By.TAG_NAME, 'body').text
    if 'Mart van Buren' not in body_text:
        raise Exception('Name not found on page.')

    # 3. Check resume is accessible.
    browser.get(resume_url)
    if is_error_response_code(webdriver.get_http_response(resume_url)):
        raise Exception("Failed to load resume.")

    logger.info("Canary successfully executed.")

def handler(event, context):
    logger.info("Selenium Python heartbeat canary.")
    return main()