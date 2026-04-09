"""Отправка заявки с формы обратной связи Prim Rooms в Telegram."""
import json
import os
import urllib.request


def handler(event: dict, context) -> dict:
    cors = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
    }

    if event.get("httpMethod") == "OPTIONS":
        return {"statusCode": 200, "headers": cors, "body": ""}

    try:
        body = json.loads(event.get("body") or "{}")
    except Exception:
        return {"statusCode": 400, "headers": cors, "body": json.dumps({"error": "bad json"})}

    name = body.get("name", "").strip()
    phone = body.get("phone", "").strip()
    message = body.get("message", "").strip()
    checkin = body.get("checkin", "").strip()
    checkout = body.get("checkout", "").strip()
    guests = body.get("guests", "").strip()

    if not name or not phone:
        return {"statusCode": 422, "headers": cors, "body": json.dumps({"error": "name and phone required"})}

    token = os.environ.get("TELEGRAM_BOT_TOKEN", "")
    chat_id = os.environ.get("TELEGRAM_CHAT_ID", "")

    lines = ["🏠 <b>Новая заявка — Prim Rooms</b>", ""]
    lines.append(f"👤 <b>Имя:</b> {name}")
    lines.append(f"📞 <b>Телефон:</b> {phone}")
    if checkin:
        lines.append(f"📅 <b>Заезд:</b> {checkin}")
    if checkout:
        lines.append(f"📅 <b>Выезд:</b> {checkout}")
    if guests:
        lines.append(f"👥 <b>Гостей:</b> {guests}")
    if message:
        lines.append(f"💬 <b>Сообщение:</b> {message}")

    text = "\n".join(lines)

    if token and chat_id:
        url = f"https://api.telegram.org/bot{token}/sendMessage"
        payload = json.dumps({
            "chat_id": chat_id,
            "text": text,
            "parse_mode": "HTML",
        }).encode()
        req = urllib.request.Request(url, data=payload, headers={"Content-Type": "application/json"})
        urllib.request.urlopen(req, timeout=10)

    return {
        "statusCode": 200,
        "headers": cors,
        "body": json.dumps({"ok": True}),
    }
