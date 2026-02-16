import React, { useState } from 'react';
import { CheckCircle, Circle, Book, Code, Rocket, Trophy, ChevronDown, ChevronUp } from 'lucide-react';

export default function FlutterLearningRoadmap() {
    const [completedItems, setCompletedItems] = useState({});
    const [expandedPhases, setExpandedPhases] = useState({ 0: true });

    const roadmap = [
        {
            phase: "Phase 1: Foundations (2-3 weeks)",
            level: "Beginner",
            color: "bg-green-500",
            sections: [
                {
                    title: "Programming Basics",
                    topics: [
                        "Variables, data types, and operators",
                        "Control flow (if/else, loops)",
                        "Functions and parameters",
                        "Object-oriented programming concepts"
                    ],
                    resources: [
                        "Dart.dev official tutorial",
                        "freeCodeCamp Dart course (YouTube)",
                        "DartPad for practice (dartpad.dev)"
                    ]
                },
                {
                    title: "Dart Language Deep Dive",
                    topics: [
                        "Classes and objects",
                        "Inheritance and polymorphism",
                        "Collections (Lists, Maps, Sets)",
                        "Null safety",
                        "Async/await and Futures",
                        "Exception handling"
                    ],
                    resources: [
                        "Dart Language Tour (dart.dev)",
                        "Effective Dart guide",
                        "Dart cheatsheet"
                    ]
                }
            ],
            project: {
                name: "CLI Todo App",
                description: "Build a command-line todo application in Dart",
                features: [
                    "Add, remove, and list tasks",
                    "Mark tasks as complete",
                    "Save/load from file",
                    "Use classes and OOP principles"
                ],
                skills: "Core Dart, file I/O, data structures"
            }
        },
        {
            phase: "Phase 2: Flutter Basics (3-4 weeks)",
            level: "Beginner",
            color: "bg-blue-500",
            sections: [
                {
                    title: "Flutter Fundamentals",
                    topics: [
                        "Flutter architecture and widget tree",
                        "Stateless vs Stateful widgets",
                        "Basic widgets (Text, Container, Row, Column)",
                        "Layout widgets (Stack, Expanded, Flexible)",
                        "Material Design components",
                        "Hot reload and debugging"
                    ],
                    resources: [
                        "Flutter docs - Get Started",
                        "Flutter Widget of the Week (YouTube)",
                        "Flutter Cookbook",
                        "Install Android Studio/VS Code with Flutter"
                    ]
                },
                {
                    title: "Building UIs",
                    topics: [
                        "Scaffold, AppBar, Drawer",
                        "Lists and ListViews",
                        "GridView and custom layouts",
                        "Forms and user input",
                        "Buttons and gestures",
                        "Images and assets"
                    ],
                    resources: [
                        "Flutter Layout Cheat Sheet",
                        "Material Design guidelines",
                        "pub.dev for packages"
                    ]
                }
            ],
            project: {
                name: "Personal Portfolio App",
                description: "Create a multi-screen app showcasing yourself",
                features: [
                    "Multiple screens (Home, About, Projects, Contact)",
                    "Custom layouts with responsive design",
                    "Image gallery",
                    "Forms for contact section",
                    "Smooth animations between screens"
                ],
                skills: "UI design, layouts, navigation basics, assets"
            }
        },
        {
            phase: "Phase 3: State Management & Navigation (3-4 weeks)",
            level: "Intermediate",
            color: "bg-purple-500",
            sections: [
                {
                    title: "State Management",
                    topics: [
                        "setState and local state",
                        "InheritedWidget and InheritedModel",
                        "Provider package (recommended start)",
                        "Riverpod (modern alternative)",
                        "BLoC pattern basics",
                        "State lifting and data flow"
                    ],
                    resources: [
                        "Provider package documentation",
                        "Riverpod documentation",
                        "Flutter state management guide",
                        "Reso Coder YouTube channel"
                    ]
                },
                {
                    title: "Navigation & Routing",
                    topics: [
                        "Navigator 1.0 (push, pop)",
                        "Named routes",
                        "Passing data between screens",
                        "Navigator 2.0 and Router",
                        "Deep linking",
                        "Bottom navigation"
                    ],
                    resources: [
                        "Flutter navigation docs",
                        "go_router package",
                        "Navigation patterns article"
                    ]
                }
            ],
            project: {
                name: "Note-Taking App with Categories",
                description: "Full-featured note app with state management",
                features: [
                    "CRUD operations for notes",
                    "Categories/tags for organization",
                    "Search and filter functionality",
                    "State management with Provider/Riverpod",
                    "Multiple screens with navigation",
                    "Data persistence (shared_preferences)"
                ],
                skills: "State management, navigation, local storage, CRUD"
            }
        },
        {
            phase: "Phase 4: Backend Integration (3-4 weeks)",
            level: "Intermediate",
            color: "bg-orange-500",
            sections: [
                {
                    title: "HTTP & APIs",
                    topics: [
                        "HTTP requests (GET, POST, PUT, DELETE)",
                        "Dio or http package",
                        "JSON serialization/deserialization",
                        "Error handling and loading states",
                        "API authentication (tokens)",
                        "RESTful API concepts"
                    ],
                    resources: [
                        "Dio package documentation",
                        "JSONPlaceholder for practice API",
                        "json_serializable package",
                        "Postman for API testing"
                    ]
                },
                {
                    title: "Local Databases",
                    topics: [
                        "SQLite with sqflite package",
                        "Database CRUD operations",
                        "Database migrations",
                        "Hive (NoSQL alternative)",
                        "Data models and repositories"
                    ],
                    resources: [
                        "sqflite package docs",
                        "Hive documentation",
                        "Database design patterns"
                    ]
                }
            ],
            project: {
                name: "Weather & News App",
                description: "Multi-API app with local caching",
                features: [
                    "Fetch weather from OpenWeatherMap API",
                    "Display news from NewsAPI",
                    "Local database for favorites",
                    "Offline mode with cached data",
                    "Pull-to-refresh functionality",
                    "Error handling and retry logic",
                    "Loading indicators"
                ],
                skills: "API integration, JSON parsing, databases, error handling"
            }
        },
        {
            phase: "Phase 5: Advanced UI & Animations (3-4 weeks)",
            level: "Intermediate-Advanced",
            color: "bg-pink-500",
            sections: [
                {
                    title: "Advanced Animations",
                    topics: [
                        "Implicit animations (AnimatedContainer, etc.)",
                        "Explicit animations with AnimationController",
                        "Hero animations",
                        "Custom transitions",
                        "Staggered animations",
                        "Rive or Lottie animations"
                    ],
                    resources: [
                        "Flutter animations tutorial",
                        "Animation class documentation",
                        "Rive app for animations",
                        "Animation samples on GitHub"
                    ]
                },
                {
                    title: "Custom Widgets & Painting",
                    topics: [
                        "CustomPaint and Canvas",
                        "Creating custom shapes",
                        "Custom clipper",
                        "Gesture detection",
                        "Custom render objects",
                        "Theme customization"
                    ],
                    resources: [
                        "CustomPaint documentation",
                        "Flutter Canvas API",
                        "UI challenge repositories"
                    ]
                }
            ],
            project: {
                name: "Fitness Tracker with Animations",
                description: "Animated app with custom visualizations",
                features: [
                    "Custom charts for progress tracking",
                    "Animated transitions between screens",
                    "Custom progress indicators",
                    "Gesture-based interactions",
                    "Theme switching (dark/light mode)",
                    "Custom illustrations with CustomPaint",
                    "Smooth micro-interactions"
                ],
                skills: "Advanced animations, custom painting, gestures, theming"
            }
        },
        {
            phase: "Phase 6: Architecture & Best Practices (4-5 weeks)",
            level: "Advanced",
            color: "bg-red-500",
            sections: [
                {
                    title: "App Architecture",
                    topics: [
                        "Clean architecture principles",
                        "MVVM pattern",
                        "Repository pattern",
                        "Dependency injection (get_it)",
                        "Feature-first folder structure",
                        "Testing (unit, widget, integration)",
                        "Code organization"
                    ],
                    resources: [
                        "Reso Coder Clean Architecture series",
                        "Flutter architecture samples",
                        "get_it package documentation",
                        "Testing documentation"
                    ]
                },
                {
                    title: "Advanced State Management",
                    topics: [
                        "BLoC pattern deep dive",
                        "Riverpod advanced features",
                        "Redux for Flutter",
                        "State management comparison",
                        "Performance optimization",
                        "Memory management"
                    ],
                    resources: [
                        "BLoC library documentation",
                        "Riverpod advanced guide",
                        "Flutter performance profiling"
                    ]
                },
                {
                    title: "Testing & Quality",
                    topics: [
                        "Unit testing",
                        "Widget testing",
                        "Integration testing",
                        "Mocking dependencies",
                        "Test coverage",
                        "CI/CD basics"
                    ],
                    resources: [
                        "Flutter testing guide",
                        "mockito package",
                        "GitHub Actions for Flutter"
                    ]
                }
            ],
            project: {
                name: "E-Commerce App (Full Stack)",
                description: "Production-ready app with clean architecture",
                features: [
                    "User authentication (Firebase Auth)",
                    "Product catalog with categories",
                    "Shopping cart with state management",
                    "Payment integration (Stripe/PayPal)",
                    "Order history and tracking",
                    "Push notifications",
                    "Clean architecture with layers",
                    "Unit and widget tests",
                    "Firebase backend integration",
                    "Image uploads to cloud storage"
                ],
                skills: "Clean architecture, testing, Firebase, payments, full CRUD"
            }
        },
        {
            phase: "Phase 7: Platform Features & Publishing (3-4 weeks)",
            level: "Advanced",
            color: "bg-indigo-500",
            sections: [
                {
                    title: "Platform Integration",
                    topics: [
                        "Platform channels (iOS/Android native)",
                        "Camera and image picker",
                        "Location services",
                        "Notifications (local & push)",
                        "File storage and permissions",
                        "Biometric authentication",
                        "In-app purchases"
                    ],
                    resources: [
                        "Platform channels documentation",
                        "Firebase Cloud Messaging",
                        "image_picker package",
                        "geolocator package"
                    ]
                },
                {
                    title: "Publishing & Deployment",
                    topics: [
                        "App signing and certificates",
                        "Google Play Console setup",
                        "Apple App Store Connect",
                        "App icons and splash screens",
                        "Release builds",
                        "Version management",
                        "Beta testing (TestFlight, Play Console)"
                    ],
                    resources: [
                        "Flutter deployment guide",
                        "Play Store publishing docs",
                        "App Store submission guidelines"
                    ]
                },
                {
                    title: "Advanced Topics",
                    topics: [
                        "Web and desktop Flutter",
                        "Flavors and environments",
                        "Code generation (build_runner)",
                        "Internationalization (i18n)",
                        "Accessibility",
                        "Performance monitoring"
                    ],
                    resources: [
                        "Flutter web documentation",
                        "flutter_flavors package",
                        "intl package for i18n"
                    ]
                }
            ],
            project: {
                name: "Social Media App + Publish",
                description: "Complete social app deployed to stores",
                features: [
                    "User profiles and authentication",
                    "Post creation with images/videos",
                    "Real-time chat (Firebase/Socket.io)",
                    "Push notifications",
                    "Like, comment, share functionality",
                    "Stories feature with animations",
                    "Dark/light theme",
                    "Multiple language support",
                    "Accessibility features",
                    "Published to Play Store/App Store"
                ],
                skills: "Real-time data, multimedia, publishing, production deployment"
            }
        }
    ];

    const toggleComplete = (phaseIndex, sectionIndex, topicIndex) => {
        const key = `${phaseIndex}-${sectionIndex}-${topicIndex}`;
        setCompletedItems(prev => ({
            ...prev,
            [key]: !prev[key]
        }));
    };

    const togglePhase = (index) => {
        setExpandedPhases(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    const getProgress = () => {
        let total = 0;
        let completed = 0;
        roadmap.forEach((phase, pIndex) => {
            phase.sections.forEach((section, sIndex) => {
                section.topics.forEach((topic, tIndex) => {
                    total++;
                    if (completedItems[`${pIndex}-${sIndex}-${tIndex}`]) {
                        completed++;
                    }
                });
            });
        });
        return Math.round((completed / total) * 100);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
                    <div className="flex items-center gap-4 mb-4">
                        <Rocket className="w-12 h-12 text-blue-600" />
                        <div>
                            <h1 className="text-4xl font-bold text-gray-800">
                                Flutter Developer Roadmap
                            </h1>
                            <p className="text-gray-600 mt-2">
                                Complete project-based learning path from beginner to advanced
                            </p>
                        </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="mt-6">
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-semibold text-gray-700">Overall Progress</span>
                            <span className="text-sm font-bold text-blue-600">{getProgress()}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                            <div
                                className="bg-gradient-to-r from-blue-500 to-indigo-600 h-full transition-all duration-500 rounded-full"
                                style={{ width: `${getProgress()}%` }}
                            />
                        </div>
                    </div>

                    {/* Learning Tips */}
                    <div className="mt-6 bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                        <h3 className="font-semibold text-blue-900 mb-2">🎯 Learning Strategy</h3>
                        <ul className="text-sm text-blue-800 space-y-1">
                            <li>• Build the project while learning each phase - don't wait until the end</li>
                            <li>• Spend 70% time coding, 30% watching/reading tutorials</li>
                            <li>• Complete projects before moving to next phase</li>
                            <li>• Join Flutter communities (Reddit, Discord) for help</li>
                            <li>• Commit code daily to GitHub to track progress</li>
                        </ul>
                    </div>
                </div>

                {/* Phases */}
                <div className="space-y-6">
                    {roadmap.map((phase, phaseIndex) => {
                        const isExpanded = expandedPhases[phaseIndex];
                        return (
                            <div key={phaseIndex} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                                {/* Phase Header */}
                                <div
                                    className={`${phase.color} text-white p-6 cursor-pointer hover:opacity-90 transition-opacity`}
                                    onClick={() => togglePhase(phaseIndex)}
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-4">
                                            <div className="bg-white/20 rounded-full p-3">
                                                <Code className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <h2 className="text-2xl font-bold">{phase.phase}</h2>
                                                <p className="text-white/90 text-sm mt-1">Level: {phase.level}</p>
                                            </div>
                                        </div>
                                        {isExpanded ? (
                                            <ChevronUp className="w-6 h-6" />
                                        ) : (
                                            <ChevronDown className="w-6 h-6" />
                                        )}
                                    </div>
                                </div>

                                {/* Phase Content */}
                                {isExpanded && (
                                    <div className="p-6">
                                        {/* Sections */}
                                        {phase.sections.map((section, sectionIndex) => (
                                            <div key={sectionIndex} className="mb-8">
                                                <div className="flex items-center gap-2 mb-4">
                                                    <Book className="w-5 h-5 text-indigo-600" />
                                                    <h3 className="text-xl font-bold text-gray-800">{section.title}</h3>
                                                </div>

                                                {/* Topics Checklist */}
                                                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                                                    <h4 className="font-semibold text-gray-700 mb-3">Topics to Learn:</h4>
                                                    <div className="space-y-2">
                                                        {section.topics.map((topic, topicIndex) => {
                                                            const key = `${phaseIndex}-${sectionIndex}-${topicIndex}`;
                                                            const isCompleted = completedItems[key];
                                                            return (
                                                                <div
                                                                    key={topicIndex}
                                                                    className="flex items-center gap-3 cursor-pointer hover:bg-gray-100 p-2 rounded transition-colors"
                                                                    onClick={() => toggleComplete(phaseIndex, sectionIndex, topicIndex)}
                                                                >
                                                                    {isCompleted ? (
                                                                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                                                                    ) : (
                                                                        <Circle className="w-5 h-5 text-gray-300 flex-shrink-0" />
                                                                    )}
                                                                    <span className={`${isCompleted ? 'line-through text-gray-500' : 'text-gray-700'}`}>
                                                                        {topic}
                                                                    </span>
                                                                </div>
                                                            );
                                                        })}
                                                    </div>
                                                </div>

                                                {/* Resources */}
                                                <div className="bg-blue-50 rounded-lg p-4">
                                                    <h4 className="font-semibold text-blue-900 mb-2">📚 Recommended Resources:</h4>
                                                    <ul className="space-y-1">
                                                        {section.resources.map((resource, idx) => (
                                                            <li key={idx} className="text-sm text-blue-800">
                                                                • {resource}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        ))}

                                        {/* Project */}
                                        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-orange-200 rounded-xl p-6 mt-6">
                                            <div className="flex items-center gap-3 mb-4">
                                                <Trophy className="w-8 h-8 text-orange-600" />
                                                <div>
                                                    <h3 className="text-2xl font-bold text-gray-800">{phase.project.name}</h3>
                                                    <p className="text-gray-600 mt-1">{phase.project.description}</p>
                                                </div>
                                            </div>

                                            <div className="mb-4">
                                                <h4 className="font-semibold text-gray-700 mb-2">Features to Implement:</h4>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                                    {phase.project.features.map((feature, idx) => (
                                                        <div key={idx} className="flex items-start gap-2">
                                                            <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                                                            <span className="text-sm text-gray-700">{feature}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="bg-white rounded-lg p-3 inline-block">
                                                <span className="text-sm font-semibold text-gray-600">Skills Gained: </span>
                                                <span className="text-sm text-orange-600 font-medium">{phase.project.skills}</span>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* Footer Tips */}
                <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-2xl shadow-xl p-8 mt-8">
                    <h3 className="text-2xl font-bold mb-4">🚀 Next Steps & Tips</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h4 className="font-semibold mb-2">After Completion:</h4>
                            <ul className="space-y-2 text-sm">
                                <li>• Build a unique portfolio project showcasing your skills</li>
                                <li>• Contribute to open-source Flutter packages</li>
                                <li>• Create tutorial content (blog, YouTube)</li>
                                <li>• Apply for Flutter developer positions</li>
                                <li>• Continue learning: Firebase, GraphQL, advanced patterns</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-2">Key Resources:</h4>
                            <ul className="space-y-2 text-sm">
                                <li>• flutter.dev (official docs - your best friend)</li>
                                <li>• pub.dev (package repository)</li>
                                <li>• r/FlutterDev (Reddit community)</li>
                                <li>• Flutter Discord server</li>
                                <li>• YouTube: Reso Coder, FilledStacks, Flutter Mapp</li>
                                <li>• GitHub: Search "flutter awesome" for examples</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
