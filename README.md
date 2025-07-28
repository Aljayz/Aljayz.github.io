<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aljayz | Tech Stack</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            min-height: 100vh;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
        }

        .container {
            max-width: 1200px;
            width: 100%;
        }

        .header {
            text-align: center;
            margin-bottom: 40px;
            animation: fadeInDown 1s ease-out;
        }

        .logo {
            width: 120px;
            height: 120px;
            margin: 0 auto 20px;
            background: linear-gradient(45deg, #3b82f6, #8b5cf6);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 48px;
            font-weight: bold;
            color: white;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
            transition: transform 0.3s ease;
        }

        .logo:hover {
            transform: scale(1.1) rotate(5deg);
        }

        .header h1 {
            color: white;
            font-size: 2.5rem;
            margin-bottom: 10px;
            text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
        }

        .header p {
            color: rgba(255, 255, 255, 0.9);
            font-size: 1.2rem;
            font-weight: 300;
        }

        .tech-stack-card {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 24px;
            padding: 40px;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
            animation: fadeInUp 1s ease-out 0.2s both;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .tech-stack-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 30px 80px rgba(0, 0, 0, 0.3);
        }

        .card-title {
            text-align: center;
            color: white;
            font-size: 2rem;
            margin-bottom: 30px;
            position: relative;
        }

        .card-title::after {
            content: '';
            position: absolute;
            bottom: -10px;
            left: 50%;
            transform: translateX(-50%);
            width: 80px;
            height: 3px;
            background: linear-gradient(90deg, #3b82f6, #8b5cf6);
            border-radius: 2px;
        }

        .tech-category {
            margin-bottom: 40px;
        }

        .category-title {
            color: white;
            font-size: 1.3rem;
            margin-bottom: 20px;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .category-icon {
            font-size: 1.5rem;
        }

        .tech-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
            gap: 15px;
        }

        .tech-badge {
            background: rgba(255, 255, 255, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 12px;
            padding: 12px 16px;
            text-align: center;
            color: white;
            font-weight: 500;
            font-size: 0.9rem;
            transition: all 0.3s ease;
            cursor: pointer;
            position: relative;
            overflow: hidden;
        }

        .tech-badge::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
            transition: left 0.5s ease;
        }

        .tech-badge:hover::before {
            left: 100%;
        }

        .tech-badge:hover {
            transform: translateY(-5px) scale(1.05);
            background: rgba(255, 255, 255, 0.2);
            border-color: rgba(255, 255, 255, 0.4);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        .tech-badge.python:hover { border-color: #3776AB; box-shadow: 0 10px 30px rgba(55, 118, 171, 0.4); }
        .tech-badge.cpp:hover { border-color: #00599C; box-shadow: 0 10px 30px rgba(0, 89, 156, 0.4); }
        .tech-badge.javascript:hover { border-color: #F7DF1E; box-shadow: 0 10px 30px rgba(247, 223, 30, 0.4); }
        .tech-badge.typescript:hover { border-color: #3178C6; box-shadow: 0 10px 30px rgba(49, 120, 198, 0.4); }
        .tech-badge.vue:hover { border-color: #4FC08D; box-shadow: 0 10px 30px rgba(79, 192, 141, 0.4); }
        .tech-badge.react:hover { border-color: #61DAFB; box-shadow: 0 10px 30px rgba(97, 218, 251, 0.4); }
        .tech-badge.firebase:hover { border-color: #FFCA28; box-shadow: 0 10px 30px rgba(255, 202, 40, 0.4); }

        .stats-section {
            margin-top: 40px;
            padding-top: 30px;
            border-top: 1px solid rgba(255, 255, 255, 0.2);
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
        }

        .stat-item {
            text-align: center;
            color: white;
        }

        .stat-number {
            font-size: 2.5rem;
            font-weight: bold;
            background: linear-gradient(45deg, #3b82f6, #8b5cf6);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 5px;
        }

        .stat-label {
            font-size: 0.9rem;
            opacity: 0.8;
        }

        @keyframes fadeInDown {
            from {
                opacity: 0;
                transform: translateY(-30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
        }

        .floating {
            animation: pulse 2s ease-in-out infinite;
        }

        @media (max-width: 768px) {
            .tech-stack-card {
                padding: 30px 20px;
            }
            
            .header h1 {
                font-size: 2rem;
            }
            
            .tech-grid {
                grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
                gap: 12px;
            }
            
            .tech-badge {
                padding: 10px 12px;
                font-size: 0.8rem;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="logo floating">AJ</div>
            <h1>Aljayz | Portfolio</h1>
            <p>Exploring AI • Cloud • Web • Mobile</p>
        </div>

        <div class="tech-stack-card">
            <h2 class="card-title">🧰 Tech Stack</h2>
            
            <div class="tech-category">
                <h3 class="category-title">
                    <span class="category-icon">🔧</span>
                    Backend
                </h3>
                <div class="tech-grid">
                    <div class="tech-badge python">Python</div>
                    <div class="tech-badge cpp">C++</div>
                    <div class="tech-badge">Sequelize</div>
                    <div class="tech-badge">PostgreSQL</div>
                    <div class="tech-badge firebase">Firebase</div>
                </div>
            </div>

            <div class="tech-category">
                <h3 class="category-title">
                    <span class="category-icon">🎨</span>
                    Frontend
                </h3>
                <div class="tech-grid">
                    <div class="tech-badge">HTML5</div>
                    <div class="tech-badge javascript">JavaScript</div>
                    <div class="tech-badge typescript">TypeScript</div>
                    <div class="tech-badge vue">Vue.js</div>
                    <div class="tech-badge">NuxtJS</div>
                    <div class="tech-badge">Quasar</div>
                    <div class="tech-badge react">React</div>
                    <div class="tech-badge react">React Native</div>
                </div>
            </div>

            <div class="tech-category">
                <h3 class="category-title">
                    <span class="category-icon">🛠</span>
                    Tools
                </h3>
                <div class="tech-grid">
                    <div class="tech-badge">Figma</div>
                    <div class="tech-badge">Git</div>
                    <div class="tech-badge">GitHub</div>
                    <div class="tech-badge">GitLab</div>
                    <div class="tech-badge">Photoshop</div>
                </div>
            </div>

            <div class="stats-section">
                <div class="stat-item">
                    <div class="stat-number">15+</div>
                    <div class="stat-label">Technologies</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number">4</div>
                    <div class="stat-label">Main Areas</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number">∞</div>
                    <div class="stat-label">Learning</div>
                </div>
            </div>
        </div>
    </div>

    <script>
        // Add interactive animations on scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animationDelay = '0s';
                    entry.target.style.animationPlayState = 'running';
                }
            });
        }, observerOptions);

        // Observe tech badges for staggered animations
        document.querySelectorAll('.tech-badge').forEach((badge, index) => {
            badge.style.animationDelay = `${index * 0.1}s`;
            observer.observe(badge);
        });

        // Add click interaction for tech badges
        document.querySelectorAll('.tech-badge').forEach(badge => {
            badge.addEventListener('click', () => {
                badge.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    badge.style.transform = '';
                }, 150);
            });
        });

        // Particle effect on hover (subtle)
        document.querySelector('.tech-stack-card').addEventListener('mousemove', (e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            
            e.currentTarget.style.background = `
                radial-gradient(circle at ${x}% ${y}%, 
                    rgba(255, 255, 255, 0.15) 0%, 
                    rgba(255, 255, 255, 0.1) 50%, 
                    rgba(255, 255, 255, 0.1) 100%)
            `;
        });

        document.querySelector('.tech-stack-card').addEventListener('mouseleave', (e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
        });
    </script>
</body>
</html>
