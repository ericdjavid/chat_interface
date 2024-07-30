"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const candidateData = [
    { name: 'Jan', candidates: 4000 },
    { name: 'Feb', candidates: 3000 },
    { name: 'Mar', candidates: 2000 },
    { name: 'Apr', candidates: 2780 },
    { name: 'May', candidates: 1890 },
    { name: 'Jun', candidates: 2390 },
    { name: 'Jul', candidates: 3490 },
];

const questionData = [
    { name: 'Jan', answered: 300 },
    { name: 'Feb', answered: 450 },
    { name: 'Mar', answered: 380 },
    { name: 'Apr', answered: 400 },
    { name: 'May', answered: 350 },
    { name: 'Jun', answered: 500 },
    { name: 'Jul', answered: 480 },
];

const menuItems = [
    { name: "My Profile", href: "/dashboard/profile" },
    { name: "Candidates", href: "/dashboard/candidates" },
    { name: "Referral", href: "/dashboard/referral" },
    { name: "Parameters", href: "/dashboard/parameters" },
];

export default function Dashboard() {
    return (
        <div className="flex h-screen bg-gray-100">
            {/* Side Menu */}
            <aside className="w-64 bg-white shadow-md">
                <nav className="mt-5">
                    <ul>
                        {menuItems.map((item) => (
                            <li key={item.name} className="mb-2">
                                <Link href={item.href} className="block px-4 py-2 text-gray-600 hover:bg-gray-200">
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-10 bg-gradient-to-br from-blue-500 to-purple-600 overflow-y-auto">
                <Alert className="mb-6">
                    <Avatar className="h-10 w-10">
                        <AvatarImage src="/avatar.png" alt="Candidate" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <AlertTitle>New Candidate Alert</AlertTitle>
                    <AlertDescription>
                        John Doe has applied for the Software Engineer position.
                        <Button variant="outline" className="ml-4">
                            <Link href="/chat">Chat with Candidate</Link>
                        </Button>
                    </AlertDescription>
                </Alert>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Candidate Applications</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="h-[300px]">
                                <ResponsiveContainer width="100%" height="100%">
                                    <LineChart data={candidateData}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                        <Tooltip />
                                        <Line type="monotone" dataKey="candidates" stroke="#8884d8" />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Answered Questions</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="h-[300px]">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={questionData}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                        <Tooltip />
                                        <Bar dataKey="answered" fill="#82ca9d" />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </div>
    );
}