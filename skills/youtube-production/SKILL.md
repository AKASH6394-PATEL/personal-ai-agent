---
name: youtube-production
version: 0.1.0
description: Turn a YouTube idea into a research-backed production plan, visual shot list, Higgsfield generation jobs, QC checklist and publish-ready package.
---

# YouTube Production Skill

## Goal
Convert one approved YouTube idea into a repeatable production pipeline:
research -> concept -> title/thumbnail -> script -> shot list -> visual generation -> edit plan -> QC -> publish package -> analytics handoff.

## Default workflow
1. Research the topic and separate verified facts from assumptions.
2. Define the audience, promise, format, target duration and retention strategy.
3. Produce 3 title options and 2 thumbnail concepts.
4. Draft the script with a strong opening, re-hooks and a clear payoff.
5. Convert the script into a scene/shot list with scene number, duration, visual prompt, camera/motion, aspect ratio, reference assets, audio/SFX notes and generation model suggestion.
6. Before any paid Higgsfield generation, show the estimated spend and request approval unless autonomous paid generation was explicitly enabled.
7. Generate approved visuals through the connected Higgsfield tool/CLI.
8. Create an edit decision list for Premiere Pro/CapCut/DaVinci: clip order, approximate timing, motivated transitions, voice/SFX/music placement and color/look notes.
9. Run QC: factual consistency, visual continuity, unwanted artifacts, audio clarity, copyright/licensing checks for supplied assets, and title/thumbnail promise matches the video.
10. Produce a publish package: final title, description, chapters when applicable, tags/keywords when useful, thumbnail brief and pinned-comment idea.
11. Hand off analytics fields for later learning.

## Cinematic visual rules
Prefer story, composition, camera movement, lighting, continuity and sound over flashy transitions. For cinematic or movie-style requests, describe real-world camera language (shot size, lens feel, camera movement, lighting and environment) and maintain character/location continuity across shots.

## Safety and cost
Never expose or commit API keys, OAuth tokens or cookies. Treat generation as a paid external action. The agent must not spend credits silently unless the user has explicitly enabled autonomous paid generation.

## Output contract
A completed run should return a structured production package with these fields:
- concept
- research
- titles
- thumbnail_concepts
- script
- shot_list
- generation_jobs
- edit_plan
- qc
- publish_package
- analytics_handoff