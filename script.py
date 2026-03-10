import re

file_path = '/Users/vinaykumarchoudannavanar/Desktop/Spaces-AG/src/components/SideNavbar.jsx'

with open(file_path, 'r') as f:
    content = f.read()

# Pattern to capture the parts we want to restructure.
# Wait, let's write an exact replace block because the structure inside nav-content differs slightly.
# MyInboxIcon: <MyInboxIcon size={16} className="nav-icon" />
# Avatar: <div className="avatar support-avatar">S</div>
# We need:
# <div className="nav-content">
#    (ICON)
#    <span className="nav-text[^>]*>TEXT</span>
# </div>
# [optional badge or header-toggle]

def replacer(match):
    nav_link_start = match.group(1)
    nav_content_start = match.group(2)
    icon_content = match.group(3)
    nav_text_content = match.group(4)
    nav_content_end = match.group(5)
    
    # Optional part
    optional_part = match.group(6) if match.group(6) else ""
    
    # We want:
    # <div className="nav-content">
    #     ICON
    # </div>
    # <div className="nav-label-container">
    #     TEXT
    #     OPTIONAL
    # </div>
    
    # Re-indentation
    
    res = f"{nav_link_start}{nav_content_start}{icon_content}{nav_content_end}\n                        <div className=\"nav-label-container\">\n                            {nav_text_content.strip()}\n"
    if optional_part.strip():
        res += f"                            {optional_part.strip()}\n"
    res += "                        </div>"
    
    return res

# <div className="nav-link[^>]*> (group 1)
#   <div className="nav-content"> (group 2)
#     (icon/avatar) (group 3)
#     <span className="nav-text[^>]*>...</span> (group 4)
#   </div> (group 5)
#   (optional badge/toggle) (group 6)

pattern = re.compile(
    r'(<div className="nav-link[^>]*>\s*)'
    r'(<div className="nav-content">\s*)'
    r'(<[A-Za-z]+Icon[^>]*>|<div className="avatar [^>]+>.*?</div>)\s*'
    r'(<span className="nav-text[^>]*>.*?</span>\s*)'
    r'(</div>)\s*'
    r'(<span className="badge">.*?</span>|<div className="header-toggle">.*?</div>)?'
)

matches = pattern.findall(content)
print(f"Found {len(matches)} matches.")
for i, m in enumerate(matches):
    print(f"Match {i+1}: {m[2].strip()} / {m[3].strip()} / {m[5] if m[5] else 'No badge/toggle'}")

new_content = pattern.sub(replacer, content)

with open(file_path, 'w') as f:
    f.write(new_content)

print("Replacement complete.")
