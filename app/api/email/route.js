import { ConnectDB } from "@/lib/config/db";
import EmailModal from "@/lib/config/models/EmailModal";
import { NextResponse } from "next/server";

const LoadDb = async () => {
    await ConnectDB();
}
LoadDb();
export async function POST(request) {
    const formData = await request.formData();
    const emailData = {
        email: `${formData.get('email')}`,

    }
    await EmailModal.create(emailData);
    return NextResponse.json({ success: true, msg: "Email Subscribed" })
}

export async function GET(request) {
    const emails = await EmailModal.find({});
    return NextResponse.json({ emails });
}

export async function DELETE(request) {
    const id = await request.nextUrl.searchParams.get("id");
    await EmailModal.findByIdAndDelete(id);
    return NextResponse.json({ success: true, msg: "Email Deleted" })
}