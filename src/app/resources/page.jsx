'use client'
import React, { useState } from 'react'
import { HeroHeader } from '@/components/header'
import FooterSection from '@/components/footer'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const ResourcesPage = () => {
    const [selectedResource, setSelectedResource] = useState(null)

    const resourceCategories = [
        {
            title: "Stress Management",
            icon: "🧠",
            color: "blue",
            description: "Learn effective techniques to identify, understand, and manage academic and personal stress.",
            resources: [
                {
                    title: "Progressive Muscle Relaxation Guide",
                    type: "Video",
                    duration: "15 min",
                    description: "Step-by-step guide to relieve physical tension and mental stress."
                },
                {
                    title: "Breathing Exercises for Anxiety",
                    type: "Audio",
                    duration: "10 min",
                    description: "Guided breathing techniques for immediate stress relief."
                },
                {
                    title: "Time Management Workbook",
                    type: "PDF",
                    pages: "24 pages",
                    description: "Practical strategies for managing academic workload effectively."
                },
                {
                    title: "Mindfulness for Students",
                    type: "Article",
                    readTime: "8 min",
                    description: "Introduction to mindfulness practices for daily stress reduction."
                }
            ]
        },
        {
            title: "Anxiety & Depression",
            icon: "💚",
            color: "green",
            description: "Understand the signs, symptoms, and effective strategies for managing anxiety and depression.",
            resources: [
                {
                    title: "Understanding Anxiety Disorders",
                    type: "Article",
                    readTime: "12 min",
                    description: "Comprehensive guide to recognizing and understanding anxiety."
                },
                {
                    title: "Depression Self-Assessment Tool",
                    type: "Interactive",
                    duration: "5 min",
                    description: "Self-screening tool to assess depression symptoms."
                },
                {
                    title: "Cognitive Behavioral Techniques",
                    type: "Video",
                    duration: "20 min",
                    description: "Learn CBT strategies for managing negative thought patterns."
                },
                {
                    title: "Building Support Networks",
                    type: "Guide",
                    readTime: "10 min",
                    description: "How to create and maintain supportive relationships."
                }
            ]
        },
        {
            title: "Academic Wellness",
            icon: "🎯",
            color: "purple",
            description: "Balance academic success with mental well-being through proven strategies and habits.",
            resources: [
                {
                    title: "Study-Life Balance Planner",
                    type: "Tool",
                    duration: "Interactive",
                    description: "Plan your schedule to balance academics and personal life."
                },
                {
                    title: "Dealing with Academic Pressure",
                    type: "Video",
                    duration: "18 min",
                    description: "Strategies for managing exam stress and academic expectations."
                },
                {
                    title: "Goal Setting Framework",
                    type: "Worksheet",
                    pages: "8 pages",
                    description: "SMART goal setting for academic and personal growth."
                },
                {
                    title: "Motivation and Procrastination",
                    type: "Article",
                    readTime: "15 min",
                    description: "Understanding and overcoming procrastination patterns."
                }
            ]
        },
        {
            title: "Relationship Skills",
            icon: "🤝",
            color: "orange",
            description: "Build healthy relationships and communication skills for better social connections.",
            resources: [
                {
                    title: "Effective Communication Guide",
                    type: "eBook",
                    pages: "32 pages",
                    description: "Master the art of clear and empathetic communication."
                },
                {
                    title: "Conflict Resolution Strategies",
                    type: "Video",
                    duration: "25 min",
                    description: "Learn to resolve conflicts constructively and peacefully."
                },
                {
                    title: "Setting Healthy Boundaries",
                    type: "Workshop",
                    duration: "45 min",
                    description: "Interactive workshop on establishing personal boundaries."
                },
                {
                    title: "Building Emotional Intelligence",
                    type: "Course",
                    duration: "2 hours",
                    description: "Develop skills to understand and manage emotions effectively."
                }
            ]
        },
        {
            title: "Work-Life Balance",
            icon: "⚖️",
            color: "yellow",
            description: "Learn to balance academics, work, and personal life for optimal mental health.",
            resources: [
                {
                    title: "Priority Setting Matrix",
                    type: "Tool",
                    duration: "Interactive",
                    description: "Eisenhower Matrix for effective priority management."
                },
                {
                    title: "Self-Care Checklist",
                    type: "Checklist",
                    items: "50 items",
                    description: "Daily and weekly self-care activities for students."
                },
                {
                    title: "Burnout Prevention Guide",
                    type: "Article",
                    readTime: "12 min",
                    description: "Recognize early signs of burnout and prevention strategies."
                },
                {
                    title: "Energy Management Techniques",
                    type: "Video",
                    duration: "16 min",
                    description: "Optimize your energy levels throughout the day."
                }
            ]
        },
        {
            title: "Crisis Resources",
            icon: "🆘",
            color: "red",
            description: "Know when and how to seek help during mental health emergencies and crises.",
            resources: [
                {
                    title: "Crisis Hotline Directory",
                    type: "Directory",
                    updated: "Weekly",
                    description: "24/7 crisis support numbers and online chat services."
                },
                {
                    title: "Emergency Action Plan",
                    type: "Template",
                    pages: "4 pages",
                    description: "Personal safety plan for mental health emergencies."
                },
                {
                    title: "When to Seek Professional Help",
                    type: "Guide",
                    readTime: "8 min",
                    description: "Understand when it's time to reach out for professional support."
                },
                {
                    title: "Campus Mental Health Services",
                    type: "Directory",
                    updated: "Monthly",
                    description: "Find mental health resources available on your campus."
                }
            ]
        }
    ]

    const getColorClasses = (color) => {
        const colorMap = {
            blue: "bg-blue-100 text-blue-600 border-blue-200",
            green: "bg-green-100 text-green-600 border-green-200",
            purple: "bg-purple-100 text-purple-600 border-purple-200",
            orange: "bg-orange-100 text-orange-600 border-orange-200",
            yellow: "bg-yellow-100 text-yellow-600 border-yellow-200",
            red: "bg-red-100 text-red-600 border-red-200"
        }
        return colorMap[color] || "bg-gray-100 text-gray-600 border-gray-200"
    }

    return (
        <div className="min-h-screen bg-background">
            <HeroHeader />
            
            {/* Header Section */}
            <section className="pt-24 pb-16 bg-gradient-to-b from-primary/5 to-background">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Mental Health Resource Library
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                            Free, evidence-based mental health resources designed by professionals. 
                            Access comprehensive guides, tools, and support materials anytime, anywhere.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 text-sm">
                            <span className="px-3 py-1 bg-primary/10 rounded-full">✓ No Login Required</span>
                            <span className="px-3 py-1 bg-primary/10 rounded-full">✓ Always Free</span>
                            <span className="px-3 py-1 bg-primary/10 rounded-full">✓ Expert Reviewed</span>
                            <span className="px-3 py-1 bg-primary/10 rounded-full">✓ Multilingual</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Resources Section */}
            <section className="py-16">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="space-y-16">
                        {resourceCategories.map((category, categoryIndex) => (
                            <div key={categoryIndex} className="space-y-8">
                                <div className="text-center">
                                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 ${getColorClasses(category.color)}`}>
                                        <span className="text-3xl">{category.icon}</span>
                                    </div>
                                    <h2 className="text-3xl font-bold mb-4">{category.title}</h2>
                                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                                        {category.description}
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                    {category.resources.map((resource, resourceIndex) => (
                                        <div key={resourceIndex} className="bg-card border rounded-lg p-6 hover:shadow-md transition-shadow">
                                            <div className="flex items-start justify-between mb-3">
                                                <span className={`px-2 py-1 text-xs rounded-full ${getColorClasses(category.color)}`}>
                                                    {resource.type}
                                                </span>
                                                <span className="text-xs text-muted-foreground">
                                                    {resource.duration || resource.readTime || resource.pages || resource.items || resource.updated}
                                                </span>
                                            </div>
                                            <h3 className="font-semibold mb-2 text-card-foreground">{resource.title}</h3>
                                            <p className="text-sm text-muted-foreground mb-4">{resource.description}</p>
                                            <Button 
                                                size="sm" 
                                                className="w-full"
                                                onClick={() => setSelectedResource(resource)}
                                            >
                                                Access Resource
                                            </Button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Emergency Resources Section */}
            <section className="py-16 bg-red-50 dark:bg-red-900/10">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4 text-red-600">Emergency Mental Health Resources</h2>
                        <p className="text-lg text-muted-foreground">
                            If you're experiencing a mental health emergency, please reach out immediately.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-background border border-red-200 rounded-lg p-6 text-center">
                            <h3 className="font-bold text-lg mb-2">Crisis Text Line</h3>
                            <p className="text-2xl font-bold text-red-600 mb-2">Text HOME to 741741</p>
                            <p className="text-sm text-muted-foreground">Free, 24/7 crisis support via text message</p>
                        </div>
                        <div className="bg-background border border-red-200 rounded-lg p-6 text-center">
                            <h3 className="font-bold text-lg mb-2">National Suicide Prevention Lifeline</h3>
                            <p className="text-2xl font-bold text-red-600 mb-2">988</p>
                            <p className="text-sm text-muted-foreground">Free, confidential support 24/7</p>
                        </div>
                    </div>
                    
                    <div className="text-center mt-8">
                        <p className="text-sm text-muted-foreground mb-4">
                            Remember: Seeking help is a sign of strength, not weakness.
                        </p>
                        <Button asChild variant="outline">
                            <Link href="/consult">
                                Start Anonymous Chat Session
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <h2 className="text-3xl font-bold mb-6">
                        Need More Personalized Support?
                    </h2>
                    <p className="text-lg text-muted-foreground mb-8">
                        While these resources are helpful for everyone, consider creating an account for personalized recommendations and progress tracking.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button asChild size="lg">
                            <Link href="/register">
                                Create Free Account
                            </Link>
                        </Button>
                        <Button asChild size="lg" variant="outline">
                            <Link href="/anonymous-session">
                                Anonymous Support Session
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

            <FooterSection />

            {/* Modal for viewing resource */}
            {selectedResource && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
                    <div className="bg-background rounded-xl max-w-3xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-2xl border">
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b">
                            <div>
                                <h3 className="text-2xl font-bold">{selectedResource.title}</h3>
                                <div className="flex gap-2 mt-2">
                                    <span className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">
                                        Type: {selectedResource.type}
                                    </span>
                                    <span className="px-2 py-1 text-xs rounded-full bg-secondary/10 text-secondary-foreground">
                                        Length: {selectedResource.duration || selectedResource.readTime || selectedResource.pages || selectedResource.items || selectedResource.updated}
                                    </span>
                                </div>
                            </div>
                            <button 
                                onClick={() => setSelectedResource(null)}
                                className="text-gray-500 hover:text-gray-800 dark:hover:text-gray-200 transition p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                </svg>
                            </button>
                        </div>

                        {/* Body content based on resource type */}
                        <div className="p-6 overflow-y-auto flex-1">
                            {selectedResource.type.toLowerCase() === 'video' && (
                                <div className="space-y-4">
                                    <div className="w-full aspect-video bg-gray-200 dark:bg-gray-800 rounded-lg flex items-center justify-center relative overflow-hidden group">
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                                        <div className="w-16 h-16 bg-primary/90 text-white rounded-full flex items-center justify-center cursor-pointer shadow-lg transform transition-transform group-hover:scale-110">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                                                <polygon points="5 3 19 12 5 21 5 3"></polygon>
                                            </svg>
                                        </div>
                                    </div>
                                    <p className="text-lg text-muted-foreground">{selectedResource.description}</p>
                                    <h4 className="font-semibold text-lg mt-6">Video Transcript Summary</h4>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        This is a simulated video resource. In a real environment, an embedded player would be shown here, presenting valuable information on {selectedResource.title.toLowerCase()}.
                                        Taking time to pause your physical and mental activity to engage with this learning material can be a highly productive way to recalibrate your nervous system.
                                    </p>
                                </div>
                            )}

                            {selectedResource.type.toLowerCase() === 'audio' && (
                                <div className="space-y-4">
                                    <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-lg p-6 flex flex-col items-center justify-center gap-4">
                                        <div className="w-20 h-20 bg-primary/20 text-primary rounded-full flex items-center justify-center mb-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
                                                <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
                                            </svg>
                                        </div>
                                        <div className="w-full bg-gray-300 dark:bg-gray-600 h-2 rounded-full overflow-hidden">
                                            <div className="bg-primary w-1/3 h-full rounded-full"></div>
                                        </div>
                                        <div className="w-full flex justify-between text-xs text-muted-foreground">
                                            <span>0:00</span>
                                            <span>{selectedResource.duration}</span>
                                        </div>
                                        <div className="flex gap-4 mt-2">
                                            <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 19 2 12 11 5 11 19"></polygon><polygon points="22 19 13 12 22 5 22 19"></polygon></svg>
                                            </button>
                                            <button className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-md">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                                            </button>
                                            <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 19 22 12 13 5 13 19"></polygon><polygon points="2 19 11 12 2 5 2 19"></polygon></svg>
                                            </button>
                                        </div>
                                    </div>
                                    <p className="text-lg text-muted-foreground">{selectedResource.description}</p>
                                </div>
                            )}

                            {(selectedResource.type.toLowerCase() === 'article' || selectedResource.type.toLowerCase() === 'guide') && (
                                <div className="space-y-6">
                                    <p className="text-xl font-medium text-gray-800 dark:text-gray-200 border-l-4 border-primary pl-4">
                                        {selectedResource.description}
                                    </p>
                                    <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                                        <p>
                                            In today's fast-paced world, managing our mental health and well-being has never been more important. 
                                            This guide provides comprehensive insights on the topic of {selectedResource.title.toLowerCase()}.
                                        </p>
                                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mt-6 mb-2">Key Highlights</h4>
                                        <ul className="list-disc pl-6 space-y-2">
                                            <li>Understand the core psychology behind these responses and behaviors.</li>
                                            <li>Identify actionable steps you can take today to improve your daily routine.</li>
                                            <li>Learn strategies for long-term consistency and positive reinforcement.</li>
                                        </ul>
                                        <p>
                                            Acknowledging when you need a shift in your daily habits or when you require professional mental health support is crucial. 
                                            Reflect on the materials presented here, and apply these evidence-based techniques into your everyday tasks.
                                        </p>
                                        <div className="bg-primary/5 p-4 rounded-lg mt-6">
                                            <p className="italic text-sm">"The greatest weapon against stress is our ability to choose one thought over another." — William James</p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {(selectedResource.type.toLowerCase() === 'pdf' || selectedResource.type.toLowerCase() === 'ebook' || selectedResource.type.toLowerCase() === 'template' || selectedResource.type.toLowerCase() === 'worksheet' || selectedResource.type.toLowerCase() === 'checklist') && (
                                <div className="space-y-6">
                                    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 p-12 flex flex-col items-center justify-center text-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 mb-4">
                                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                            <polyline points="14 2 14 8 20 8"></polyline>
                                            <line x1="16" y1="13" x2="8" y2="13"></line>
                                            <line x1="16" y1="17" x2="8" y2="17"></line>
                                            <polyline points="10 9 9 9 8 9"></polyline>
                                        </svg>
                                        <h4 className="text-xl font-bold mb-2">{selectedResource.title}.pdf</h4>
                                        <p className="text-muted-foreground mb-6">Size: 4.2 MB • {selectedResource.pages || selectedResource.items || "Document"}</p>
                                        <Button className="flex items-center gap-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                                            Download Document
                                        </Button>
                                    </div>
                                    <p className="text-center text-sm text-gray-500">
                                        This is a simulated document view. Clicking download would normally save the {selectedResource.type.toLowerCase()} to your device.
                                    </p>
                                </div>
                            )}

                            {(selectedResource.type.toLowerCase() === 'interactive' || selectedResource.type.toLowerCase() === 'tool' || selectedResource.type.toLowerCase() === 'course' || selectedResource.type.toLowerCase() === 'workshop' || selectedResource.type.toLowerCase() === 'directory') && (
                                <div className="space-y-6 h-full flex flex-col">
                                    <div className="bg-primary/5 border border-primary/20 rounded-lg p-8 flex-1 flex flex-col items-center justify-center text-center">
                                        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                                                <circle cx="12" cy="12" r="10"></circle>
                                                <line x1="2" y1="12" x2="22" y2="12"></line>
                                                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                                            </svg>
                                        </div>
                                        <h4 className="text-2xl font-bold mb-4">Interactive Web Application</h4>
                                        <p className="text-muted-foreground max-w-md mx-auto mb-8">
                                            {selectedResource.description} You are about to launch a web-based {selectedResource.type.toLowerCase()} that requires an active internet connection.
                                        </p>
                                        <Button size="lg" className="w-full sm:w-auto px-8">
                                            Launch '{selectedResource.title}'
                                        </Button>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Footer */}
                        <div className="p-4 border-t bg-gray-50 dark:bg-gray-900/50 flex justify-end">
                            <Button variant="outline" onClick={() => setSelectedResource(null)}>
                                Close Viewer
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ResourcesPage
